import { IDetailData } from './types';

export const EMPLOYEE_DATA: IDetailData = {
  marioGalla: {
    imageUrl: '/images/mgalla.jpg',
    name: 'Mario Galla',
    email: 'galla@nutably.io',
    education: 'Diploma Business Administration',
    location: 'Traunreut, Germany',
    languages: ['German', 'English'],
    role: 'CEO',
    certificates: [
      'SAP SuccessFactors Learning',
      'SAP SuccessFactors Employee Central',
      'SAP SuccessFactors Workforce Analytics  Functional Consultant',
      'SAP SuccessFactors Functional Reporting',
    ],
    bio: 'More than nine years of consulting experience in different roles and markets. As digital native and tech lover fully commited to digialize the world.',
    previousWorkExperience: [
      {
        id: 1,
        name: 'mutably GmbH',
        location: 'Traunreut, Germany',
        role: 'CEO',
        from: '2022',
        to: 'present',
      },
      {
        id: 2,
        name: 'PriceWaterhouseCoopers GmbH',
        location: 'Munich, Germany',
        role: 'Senior Manager',
        from: '2016',
        to: '2022',
      },
      {
        id: 3,
        name: 'accenture GmbH',
        location: 'Munich, Germany',
        role: 'Associate Consultant',
        from: '2014',
        to: '2016',
      },
    ],
    focusAreas: [
      'SAP SuccessFactors',
      'Project Management',
      'Workshop Moderation',
      'Validated Learning',
      'Complex Transformations',
    ],
  },
};
