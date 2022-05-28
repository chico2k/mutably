import { EMPLOYEE_DATA } from './employees';
import { IReferences } from './types';

export const references: IReferences[] = [
  {
    name: 'International Pharma Company',
    industry: 'Pharmaceuticals',
    employees: '40,000',
    role: 'Project Manager',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis architecto voluptatibus. Repellendus ducimus praesentium asperiores iste blanditiis fugiat nemo odit laboriosam fugit aliquid eum minima officiis, quaerat ab nostrum.',
    technology: 'SAP SuccessFactors',
    year: '2016 - 2020',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'Project Management',
      'DMS Integration',
      'Validated LMS',
      'Change Control',
      'Data Migration',
      'Custom Reporting',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Pharma Company',
    industry: 'Pharmaceuticals',
    employees: '60,000',
    role: 'Learning Management Expert',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis architecto voluptatibus. Repellendus ducimus praesentium asperiores iste blanditiis fugiat nemo odit laboriosam fugit aliquid eum minima officiis, quaerat ab nostrum.',
    technology: 'SAP SuccessFactors',
    year: '2020 - ongoing',
    country: 'Germany',
    projectScope: 'Global',
    tags: ['DMS Integration', 'Validated LMS', 'Change Control'],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'City Adminstration',
    industry: 'Public',
    employees: '40,000',
    role: 'Project Manager',
    description:
      'Mutably supports the current HR Transformation as Project Management Manager. The client aims to leverage the SAP SuccessFactors platform to provide a unified HR experience across all departments. Starting with a cloud preparation, the client will then move to the implementation phase to implement Recruiting, Onboaridng, Goals & Performance Management, Career and Development and Learning Management',
    technology: 'SAP SuccessFactors',
    year: '2021 - ongoing',
    country: 'Germany',
    projectScope: 'Local',
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
    tags: ['Cloud Preperation', 'Project Management', 'Complex Transformation'],
  },
];
