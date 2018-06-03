import React from 'react';

class RegisterSuccess extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hidden: 'message-hidden',
      });
    }, 3000);
  }

  render() {
    if (this.state.hidden) {
      setTimeout(() => {
        this.props.handleRegisterSuccess(false);
      }, 500);
    }
    return (
      <div className={`message ${this.state.hidden ? this.state.hidden : null}`}>
        <p className="message__text">Your account has been registered successfully.</p>
      </div>
    );
  }
}


export default RegisterSuccess;
