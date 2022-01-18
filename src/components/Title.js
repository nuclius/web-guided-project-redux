import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  
  return {
    appName: state.appName,
    editing: state.editing,
    title: state.title,
  }
}

export default connect(mapStateToProps)(Title);
//mapStateToProps : function that gets the current state and injects into props anything that is returned.
//mapActionToProps : object that contains action creators. These functions are injected into props. They are AUTOMATICALLY DISPATCHED, when executed.
//component : the component we are injecting props into.