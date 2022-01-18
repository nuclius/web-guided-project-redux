import React from 'react';
import { connect } from 'react-redux';

import { toggleEditing } from './../actions/titleActions';

const TitleDisplay = (props)=> {
  console.log(props);
  
  const handleClick = () => {
    props.dispatch(toggleEditing());
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

const mapActionToProps = {
  toggleEditing: toggleEditing
}

export default connect(mapStateToProps, mapActionToProps)(TitleDisplay);