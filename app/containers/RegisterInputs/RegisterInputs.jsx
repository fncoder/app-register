import React from 'react';
import { connect } from 'react-redux';
import { addNameValue, addPasswordValue, addRepeatPasswordValue } from 'actions';
import RegisterInputs from 'components/RegisterInputs';

class RegisterInputsContainer extends React.Component {
  constructor() {
    super();

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
  }

  handleChangeName(e) {
    const { handleChangeName } = this.props;
    handleChangeName(e.target.value);
  }

  handleChangePassword(e) {
    const { handleChangePassword } = this.props;
    handleChangePassword(e.target.value);
  }

  handleChangeRepeatPassword(e) {
    const { handleChangeRepeatPassword } = this.props;
    handleChangeRepeatPassword(e.target.value);
  }

  render() {
    return (
      <RegisterInputs
        name={this.props.name}
        password={this.props.password}
        repeatPassword={this.props.repeatPassword}
        validate={this.props.validate}
        handleChangeName={this.handleChangeName}
        handleChangePassword={this.handleChangePassword}
        handleChangeRepeatPassword={this.handleChangeRepeatPassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: state.addNameValue,
  password: state.addPasswordValue,
  repeatPassword: state.addRepeatPasswordValue,
  validate: state.fetchValidateSuccess,
});

const mapDispatchToProps = dispatch => ({
  handleChangeName: value => dispatch(addNameValue(value)),
  handleChangePassword: value => dispatch(addPasswordValue(value)),
  handleChangeRepeatPassword: value => dispatch(addRepeatPasswordValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterInputsContainer);
