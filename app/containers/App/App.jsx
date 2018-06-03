import React from 'react';
import { connect } from 'react-redux';
import App from 'App.jsx';

const mapStateToProps = state => ({
  register: state.loadRegisterPage,
  login: state.loadLoginPage,
  home: state.loadHomePage,
});

export default connect(mapStateToProps)(App);
