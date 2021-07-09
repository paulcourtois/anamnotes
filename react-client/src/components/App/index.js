import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import Login from 'src/components/Login';
import Chat from 'src/components/Chat';

const App = ({connected}) => {
 
  return <div className="app">
      {connected ? <Chat /> : <Login /> }
  </div>
}

const mapStateToProps = (state) => {
  return {connected : state.isConnected}
};
const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
