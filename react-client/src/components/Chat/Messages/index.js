import React from 'react';
import {connect} from 'react-redux';

const Messages = ({messages, pseudo}) => {
  return <div className="messages-container">
    <ul className="messages">
      {
        messages.map(message =>{
          let kls = 'message';
          if (message.author === pseudo ) kls += ' message--mine';
          return (
            // Pas parfait comme key
            <li key={message.createdAt} className={kls}>
              <div className="message__author">{message.author}</div>
              <div className="message__content">{message.content}</div>
            </li>
          )
        })
      }
    </ul>
  </div>
}

const mapStateToProps = (state) =>{
 return{
   messages: state.messages,
   pseudo: state.authorName
 }
};
const mapDispatchToProps = (dispatch) => {
  return{}
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
