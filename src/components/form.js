import React from 'react';
import { connect } from 'react-redux';
import { changeInput, addTodo } from '../actions';

export function Form(props) {

  function onInputChange(e) {
    props.dispatch(changeInput(e.target.value));
  };

  function onFormSubmit(e) {
    e.preventDefault();

    props.dispatch(addTodo(props.inputVal));

    props.dispatch(changeInput(''));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Add a todo:&nbsp;
        <input placeholder="clean the fish bowl"
          value={props.inputVal}
          onChange={onInputChange}/>
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  inputVal: state.inputReducer.inputVal
});

export default connect(mapStateToProps)(Form);
