import React from 'react';
import Register from 'containers/Register';
import Login from 'containers/Login';
import Home from 'containers/Home';

const App = ({ register, login, home }) => (
  <React.Fragment>
    { register ? <Register /> : null }
    { login ? <Login /> : null }
    { home ? <Home /> : null }
  </React.Fragment>
);

export default App;
