import React, { InputHTMLAttributes } from 'react';
import { Field, FieldProps, FormikHelpers } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { IContactFormValues } from '../../../../types';

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  textArea?: boolean;
}

const ContactFields: React.FC<IFieldProps> = ({
  fieldName,
  textArea,
  ...props
}) => {
  return (
    <Field>
      {({
        form: { handleChange, handleBlur, errors, touched, values },
      }: any) => {
        return (
          <div>
            <div className='flex justify-between'>
              <label
                htmlFor={fieldName}
                className={`block text-sm font-medium text-gray-200 mb-2 ${
                  errors[fieldName] && touched[fieldName] ? 'text-red-600' : ''
                }`}
              >
                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
              </label>
              <p className='text-sm text-red-600' id='email-error'>
                {errors[fieldName] && touched[fieldName]
                  ? errors[fieldName]
                  : ''}
              </p>
            </div>
            <div className='mt-1 relative rounded-md shadow-sm'>
              {textArea ? (
                <textarea
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[fieldName]}
                  id={fieldName}
                  name={fieldName}
                  rows={4}
                  className={`
                  ${
                    errors[fieldName] && touched[fieldName]
                      ? 'border border-red-600 placeholder-red-300'
                      : 'border-white '
                  }
                  block w-full px-4 py-3 rounded-md border-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900`}
                />
              ) : (
                <input
                  {...props}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[fieldName]}
                  id={fieldName}
                  name={fieldName}
                  className={`
                ${
                  errors[fieldName] && touched[fieldName]
                    ? 'border border-red-600 placeholder-red-300'
                    : 'border-white '
                }
                block w-full px-4 py-3 rounded-md border-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 
              `}
                />
              )}
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                {errors[fieldName] && touched[fieldName] ? (
                  <ExclamationCircleIcon
                    className='h-5 w-5 text-red-500'
                    aria-hidden='true'
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      }}
    </Field>
  );
};

export default ContactFields;
