import { IDetailData } from './types';

export const EMPLOYEE_DATA: IDetailData = {
  marioGalla: {
    imageUrl: '/images/mgalla.jpg',
    imageBlur:
      'data:image/webp;base64,UklGRuwCAABXRUJQVlA4WAoAAAAgAAAAiAAAiAAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCuAAAAkAoAnQEqiQCJAD7tdq9UqacjoyBsSTAdiWlu3//4H/GEQD1tWPeYwAq+BcDydlbQ1hQw2gSFunz13tfLVoyOqRCT3J26eUFibubTKdbhohQxNpYT8ZaomgedL3nAAP7viZuvdcUc1KHG2IJc8WgdSqQF0AgEqR3ykLOu0WrYpyBKNZd5mDVMCu7jCVMCX1kKYF4NuTUGakhh8RzbExNPhy9+mFWIO/C8tdSUQAAA',
    detailUrl: '/team/mario-galla',
    name: 'Mario Galla',
    email: 'galla@nutably.io',
    phone: '+49 170 9675 488',
    education: 'Diploma Business Administration',
    location: 'Traunreut, Germany',
    languages: ['German', 'English'],
    role: 'CEO',
    certificates: [
      `SAP${String.fromCodePoint(
        0x000ae
      )} SuccessFactors Learning - Professional`,
      `SAP${String.fromCodePoint(
        0x000ae
      )} SuccessFactors Employee Central - Associate`,
      `SAP${String.fromCodePoint(
        0x000ae
      )} SuccessFactors Workforce Analytics  Functional Consultant - Associate`,
      `SAP${String.fromCodePoint(
        0x000ae
      )} SuccessFactors Functional Reporting - Associate`,
    ],
    bio: `Mario has more than 9 years of experience in HR digitalization projects as well as implementing SAP${String.fromCodePoint(
      0x000ae
    )} SuccessFactors for a variety of clients & industries. He has a diploma in Business Administration with focus on Human Resources.`,
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
      `SAP${String.fromCodePoint(0x000ae)} SuccessFactors`,
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
