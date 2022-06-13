import { EMPLOYEE_DATA } from './employees';
import { IReferences } from './types';

export const references: IReferences[] = [
  {
    name: 'German City Adminstration',
    industry: 'Public',
    employees: '40,000',
    role: 'Project Manager',
    description:
      'Project Manager in an organization wide HR Transformation. The client aims with SAP SuccessFactors to a unified HR experience across all departments. Starting with a cloud preparation, the client moves to the implementation phase. The scope includes Recruiting Management & Marketing, Onboarding 2.0, Goals & Performance Management, Career and Development and Learning Management as well as all technical integration aspects.',
    technology: 'SAP SuccessFactors',
    year: '2021 - ongoing',
    country: 'Germany',
    projectScope: 'Local',
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
    tags: ['Cloud Preperation', 'Project Management', 'Complex Transformation'],
  },
  {
    name: 'International Pharma Company',
    industry: 'Pharmaceuticals',
    employees: '60,000',
    role: 'Workstream Lead validated LMS',
    description:
      'Workstream Lead for a global validated Learning Management System implementation. The implementation is embedded in a global HR Transformation including Shared-Services transition and SAP SuccessFactors implementation.',
    technology: 'SAP SuccessFactors',
    year: '2020 - ongoing',
    country: 'Germany',
    projectScope: 'Global',
    tags: [
      'Validated LMS',
      'Implemenation Planning',
      'DMS Integration',
      'Change Control',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Energy, Agriculture & Building Material Company',
    industry: 'Retail & Agribusiness',
    employees: '20,000',
    role: 'Project Manager',
    description:
      'Project Lead for an initial Cloud Preparation Phase with an subsequent implementation of SAP SuccessFactors Employee Central, Learning Management System and Integrations to third-party systems. Preparation and execution of an End-to-end project delivery including Design, Configuration and Testing.',
    technology: 'SAP SuccessFactors',
    year: '2019 - 2021',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'Project Management',
      'Cloud Preperation',
      'Employee Central',
      'LMS',
      'Integration Third-Party',
      'Custom Reporting',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Automotive Company',
    industry: 'Automotive',
    employees: '10,000',
    role: 'Project Manager',
    description:
      'Project Lead for a full-suite Cloud Preparation Phase for SAP SuccessFactors. Evaluation of client`s maturity state in terms of transition to cloud as well as definition of future implementation roadmap, resource planning and executive management decision paper.',
    technology: 'SAP SuccessFactors',
    year: '2021',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'Project Management',
      'Cloud Preperation',
      'Full-suite',
      'Implemenation Planning',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Chemical Company',
    industry: 'Chemical',
    employees: '14,000',
    role: 'Project Manager',
    description:
      'Project Lead for an initial Cloud Preparation Phase with an subsequent implementation of SAP SuccessFactors Recruiting Management & Marketing.',
    technology: 'SAP SuccessFactors',
    year: '2018 - 2019',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'Project Management',
      'Cloud Preperation',
      'Recruiting Mgmt. & Marketing',
      'Custom Reporting',
      'Training',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Pharma Company',
    industry: 'Pharmaceuticals',
    employees: '80,000',
    role: 'Project Manager',
    description:
      'Overall Project Lead for a holistic SAP SuccessFactors transformation and Workstream Lead for a global validated Learning Management System implementation. Driving Global Template setup with workshop moderation and functional as well technical design phase. Subsequent roll-out phase with workshops world wide (e.g. Germany, France, Japan).',
    technology: 'SAP SuccessFactors',
    year: '2016 - 2020',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'Project Management',
      'DMS Integration',
      'Validated LMS',
      'International Workshops',
      'Change Control',
      'Data Migration',
      'Custom Reporting',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'International Chemical Company',
    industry: 'Chemical',
    employees: '110,000',
    role: 'Workstream Lead LMS',
    description:
      'Workstream Lead for a global Learning Management System implementation. Driving Global Template setup with workshop moderation and functional as well technical design phase. Subsequent roll-out phase for Europe, Asia Pacific and South America with workshops worldwide (e.g. Germany,  Brazil). Preparation end execution of data migration to replace legacy applications.',
    technology: 'SAP SuccessFactors',
    year: '2014 - 2016',
    country: 'Germany',
    projectScope: 'Global',

    tags: [
      'International Workshops',
      'Data Migration',
      'Custom Reporting',
      'LMS',
      'Training',
    ],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
  {
    name: 'German Retail and Tourism Company',
    industry: 'Retail & Tourism',
    employees: '335,000',
    role: 'Subject Matter Expert LMS',
    description:
      'Subject Matter Expert for SAP SuccessFactors Learning Management System implementation. Execution of configuration and design review sessions as well as conducting admin and end-user trainings.',
    technology: 'SAP SuccessFactors',
    year: '2016 - 2018',
    country: 'Germany',
    projectScope: 'National',

    tags: ['LMS', 'Training', 'Custom Reporting'],
    referenceEmployee: EMPLOYEE_DATA.marioGalla,
  },
];
