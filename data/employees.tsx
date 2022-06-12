import { IDetailData } from './types';

export const EMPLOYEE_DATA: IDetailData = {
  marioGalla: {
    imageUrl: '/images/mgalla.jpg',
    name: 'Mario Galla',
    email: 'galla@nutably.io',
    phone: '+49 170 9675 488',
    education: 'Diploma Business Administration',
    location: 'Traunreut, Germany',
    languages: ['German', 'English'],
    role: 'CEO',
    certificates: [
      'SAP SuccessFactors Learning - Professional',
      'SAP SuccessFactors Employee Central - Associate',
      'SAP SuccessFactors Workforce Analytics  Functional Consultant - Associate',
      'SAP SuccessFactors Functional Reporting - Associate',
    ],
    bio: 'Mario has more than 9 years of experience in HR digitalization projects as well as implementing SAP SuccessFactors for a variety of clients & industries. He has a diploma in Business Administration with focus on Human Resources.',
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
      'Learning Mgmt.',
      'Complex Transformations',
      'Integration & Infrastructure',
      'Change Management & Training',
      'Compliance',
      'GxP',
    ],
  },
};
