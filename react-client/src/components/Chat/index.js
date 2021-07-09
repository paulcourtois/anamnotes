import React from 'react';
import {connect} from 'react-redux';

import Messages from './Messages';
import Form from './Form';

import './chat.scss';

const Chat = () => {
  return <div className="chat-container">
    <Messages />
    <Form />
  </div>
}

const mapStateToProps = (state) =>{
 return{}
};
const mapDispatchToProps = (dispatch) => {
  return{}
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
