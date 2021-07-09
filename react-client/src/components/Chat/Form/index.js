import React from 'react';
import {connect} from 'react-redux';

const Form = ({message, trackMessage, sendMessage}) => {
  return <div className="input-container">
    <form className="form" onSubmit={sendMessage}>
      <input
        type="text"
        className="form_input"
        placeholder="Votre message..."
        value={ message }
        onChange={trackMessage}
        autoFocus
      />
      <button
        type="submit"
        className="form__button"
      >
        Envoyer
      </button>
    </form>
  </div>
}

const mapStateToProps = (state) =>{
 return{
   message: state.message
 }
};
const mapDispatchToProps = (dispatch) => {
  return{
    trackMessage: (e)=>{
      dispatch({type: 'EDIT_MESSAGE', message: e.target.value})
    },
    sendMessage: (e)=>{
      e.preventDefault();
      dispatch({type: 'SEND_MESSAGE'});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)
