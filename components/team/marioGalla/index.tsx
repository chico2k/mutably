import React from 'react';
import { EMPLOYEE_DATA } from '../../../data/employees';
import DetailComponent from '../detail';

const MarioGallaComponent = () => {
  return <DetailComponent detailData={EMPLOYEE_DATA.marioGalla} />;
};

export default MarioGallaComponent;
