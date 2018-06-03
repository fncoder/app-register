import React from 'react';
import { connect } from 'react-redux';
import { addNameValue, addPasswordValue } from 'actions';
import LoginInputs from 'components/LoginInputs';

class LoginInputsContainer extends React.Component {
  constructor() {
    super();

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeName(e) {
    const { handleChangeName } = this.props;
    handleChangeName(e.target.value);
  }

  handleChangePassword(e) {
    const { handleChangePassword } = this.props;
    handleChangePassword(e.target.value);
  }

  render() {
    return (
      <LoginInputs
        name={this.props.name}
        password={this.props.password}
        validate={this.props.validate}
        handleChangeName={this.handleChangeName}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: state.addNameValue,
  password: state.addPasswordValue,
  validate: state.fetchValidateSuccess,
});

const mapDispatchToProps = dispatch => ({
  handleChangeName: value => dispatch(addNameValue(value)),
  handleChangePassword: value => dispatch(addPasswordValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginInputsContainer);
