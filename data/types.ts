export type IReferences = {
  name: string;
  industry: string;
  employees: string;
  referenceEmployee: IDetailFields;
  role: string;
  description: string;
  technology: string;
  year: string;
  country: string;
  projectScope: string;
  tags: string[];
};

export type IDetailData = {
  [key: string]: IDetailFields;
};

export type IDetailFields = {
  name: string;
  imageUrl: string;
  email: string;
  phone: string,
  education: string;
  location: string;
  languages: string[];
  role: string;
  certificates: string[];
  bio: string;
  previousWorkExperience: Array<IDetailFieldsPreviousExperience>;
  focusAreas: string[];
};

export type IDetailFieldsPreviousExperience = {
  id: number;
  name: string;
  location: string;
  role: string;
  from: string;
  to: string;
};
