import React from 'react';
import { connect } from 'react-redux';
import { addMember } from './../actions/dragonActions';

import DragonMember from './DragonMember';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = ()=> {
    this.props.dispatch(addMember(this.state.newMember));
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members
  }
}

export default connect(mapStateToProps)(DragonList);
