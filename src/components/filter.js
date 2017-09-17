import React from 'react';
import FilterLink from './filterLink';

export default function Filter() {

  return (
    <div>
      <FilterLink filter='ALL'/>
      <FilterLink filter='COMPLETE'/>
      <FilterLink filter='INCOMPLETE'/>
    </div>
  );
};
