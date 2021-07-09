import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';

// fonction autoscroll custom
const useAutoScroll = (constraints) => {
  const target = useRef();
  useEffect(
    ()=>{
      target.current.scrollIntoView({behavior:'smooth'});
    },
    constraints
  );
  return target;
}
const Messages = ({messages, pseudo}) => {

  //autoscroll en bas de page à chaque nouveau message
  const bottom = useAutoScroll([messages]);

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
      <li className="message message--void" ref={bottom}></li>

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
