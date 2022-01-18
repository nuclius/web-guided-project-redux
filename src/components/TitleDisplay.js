import React from 'react';
import { connect } from 'react-redux';

const TitleDisplay = (props)=> {
  console.log("titleDisplay: ", props);
  const handleClick = () => {
    props.handleToggleEditing();
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

export default connect(mapStateToProps)(TitleDisplay);