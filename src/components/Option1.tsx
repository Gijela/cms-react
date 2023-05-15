import React from 'react';

import Filter from './Filter.tsx';
import TableComponent from './Table.tsx';

import './Option1.scss'

const Option1: React.FC = () => {

  return (
    <div className='option1'>
      <Filter />
      <TableComponent />
    </div>
  )
};

export default Option1;