import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions';

export function FilterLink(props) {

  function onFilterClick() {
    props.dispatch(applyFilter(props.filter));
  }

  return (
    <span onClick={onFilterClick}>
      <a href="#">{props.filter}</a>
      &nbsp;
    </span>
  );
};

export default connect()(FilterLink);
