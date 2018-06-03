import React from 'react';
import { connect } from 'react-redux';
import {
  loadLoginPage,
  loadRegisterPage,
  addNameValue,
  addPasswordValue,
  addRepeatPasswordValue,
  fetchValidateSuccess,
  changeInputStatus,
} from '../../actions';
import { fetchLoginValidate } from 'api';
import Login from 'components/Login';

class LoginContainer extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { inputStatus } = this.props;

    if (inputStatus) {
      this.handleChange();
    }
  }

  handleChange() {
    const { name, password, fetchChangeValidate } = this.props;
    fetchChangeValidate({ name, password });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, password, fetchClickValidate } = this.props;
    fetchClickValidate({ name, password });
  }

  render() {
    return (
      <Login
        handleClick={this.props.handleClick}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  componentDidMount() {
    const { handleValidateSuccess, handleInputStatus, handleReset } = this.props;
    handleInputStatus(false);
    handleValidateSuccess('');
    handleReset('');
  }
}

const mapStateToProps = state => ({
  name: state.addNameValue,
  password: state.addPasswordValue,
  inputStatus: state.changeInputStatus,
});

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(loadLoginPage());
    dispatch(loadRegisterPage());
  },
  handleReset(value) {
    dispatch(addNameValue(value));
    dispatch(addPasswordValue(value));
    dispatch(addRepeatPasswordValue(value));
  },
  handleInputStatus: value => dispatch(changeInputStatus(value)),
  handleValidateSuccess: value => dispatch(fetchValidateSuccess(value)),
  fetchClickValidate: value => dispatch(fetchLoginValidate.fetchClickValidate(value)),
  fetchChangeValidate: value => dispatch(fetchLoginValidate.fetchChangeValidate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
