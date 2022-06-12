import * as Yup from 'yup';
import { Formik } from 'formik';
import useContactSubmit from './useContactSubmit';
import { IContactFormValues } from '../../../types';
import ContactFields from './Field';
import ReCAPTCHA from 'react-google-recaptcha';

const initialValues: IContactFormValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  robot: true,
};

interface IProps {
  setSuccess: (status: boolean) => void;
  success: boolean;
}

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Please provide a name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    message: Yup.string().required('Please provide a message'),
    robot: Yup.boolean()
      .required('The reCAPTCHA must be completed successfully')
      .oneOf([false], 'The reCAPTCHA must be completed successfully'),
  });

const ContactForm: React.FC<IProps> = ({ setSuccess, success }) => {
  const { contactSubmitHandler } = useContactSubmit();
  if (success) return null;
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={async (vals, { setStatus }) => {
        const response = await contactSubmitHandler(vals);

        if (!response) {
          return setStatus({
            'response': 'Something went wrong. Please try again later',
          });
        }

        return setSuccess(true);
      }}
    >
      {({ handleSubmit, errors, touched, setFieldValue, status, values }) => {
        return (
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6'>
            <ContactFields fieldName='name' autoComplete='name' />
            <ContactFields fieldName='email' autoComplete='email' />
            <ContactFields fieldName='phone' autoComplete='tel' />
            <ContactFields fieldName='company' />
            <ContactFields fieldName='message' textArea />
            <div>
              <div className='my-6'>
                <p className='mb-4 text-sm text-red-600' id='robot-error'>
                  {errors['robot'] && touched['robot'] ? errors['robot'] : ' '}
                </p>
                <p className='mb-4 text-sm text-red-600' id='robot-error'>
                  {status && status['response'] ? status['response'] : ' '}
                </p>
                <ReCAPTCHA
                  sitekey='6LePoBsgAAAAANy765Nz0Jl4gtYgXsJego5D8nHT'
                  onChange={() => setFieldValue('robot', false)}
                  theme={'dark'}
                />
              </div>
              <button
                type='submit'
                className={`
                
                inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
