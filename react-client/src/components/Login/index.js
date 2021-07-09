import React from 'react';
import { connect } from 'react-redux';
import './login.scss';

const Login = ({
  pseudo,
  trackPseudo,
  login
}) =>{
  return <div className="login-container">
    <h2 className='login-title'>Bienvenue sur Anam'chat !</h2>
    <p className='login-description'>Entre ton pseudonyme et rejoins la conversation</p>
    <form onSubmit={login} className='login-form'>
      <input
        type='text'
        name='pseudo'
        className='input'
        value={pseudo}
        onChange={trackPseudo}
        required
        placeholder='Votre pseudo...'
        autoFocus={true}
        />
      <button type="submit" className="login-button">Se connecter</button>
    </form>
  </div>
};


// Je devrais faire un dossier séparé avec les containers, mais je vais les faire ici pour gagner du temps

const mapStateToProps = (state,ownProps) =>{
  return{
    pseudo: state.authorName
  }
};

const mapDispatchToProps = (dispatch, ownprops) =>{
  return {
    trackPseudo: (e)=>{
      dispatch({type: 'TRACK_PSEUDO', value: e.target.value})
    },
    login: (e)=>{
      e.preventDefault();
      dispatch({type:'LOGIN'})
    }
  }
};

let container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


export default container;
