import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle } from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const handleToggleEditing = () => {
    console.log("1. Capture the click");
    props.dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    // dispatch(updateTitle(title));
  }

  console.log("0/5. Renders new state.");
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appName: state.appName,
    editing: state.editing
  }
}

export default connect(mapStateToProps)(Title);
// export default Title;

//mapStateToProps : function that gets the current state and injects into props anything that is returned.
//mapActionToProps : object that contains action creators. These functions are injected into props. They are AUTOMATICALLY DISPATCHED, when executed.
//component : the component we are injecting props into.