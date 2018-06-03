import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { propTypes } from 'containers/Register';
import {
  addNameValue,
  addPasswordValue,
  addRepeatPasswordValue,
  loadRegisterSuccessPopup,
  fetchValidateSuccess,
  changeInputStatus,
} from 'actions';
import { fetchRegisterValidate } from 'api';
import Register from 'components/Register';

class RegisterContainer extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      handleRegisterSuccess, handleValidateSuccess, handleInputStatus, handleReset,
    } = this.props;
    handleRegisterSuccess(false);
    handleInputStatus(false);
    handleValidateSuccess('');
    handleReset('');
  }

  componentDidUpdate() {
    const { inputStatus } = this.props;

    if (inputStatus) {
      this.handleChange();
    }
  }

  handleChange() {
    const {
      name, password, repeatPassword, fetchChangeValidate,
    } = this.props;
    fetchChangeValidate({ name, password, repeatPassword });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name, password, repeatPassword, fetchClickValidate,
    } = this.props;
    fetchClickValidate({ name, password, repeatPassword });
  }

  render() {
    return (
      <Register
        registerSuccess={this.props.registerSuccess}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: state.addNameValue,
  password: state.addPasswordValue,
  repeatPassword: state.addRepeatPasswordValue,
  registerSuccess: state.loadRegisterSuccessPopup,
  inputStatus: state.changeInputStatus,
});

const mapDispatchToProps = dispatch => ({
  handleReset(value) {
    dispatch(addNameValue(value));
    dispatch(addPasswordValue(value));
    dispatch(addRepeatPasswordValue(value));
  },
  handleRegisterSuccess: value => dispatch(loadRegisterSuccessPopup(value)),
  handleInputStatus: value => dispatch(changeInputStatus(value)),
  fetchClickValidate: value => dispatch(fetchRegisterValidate.fetchClickValidate(value)),
  fetchChangeValidate: value => dispatch(fetchRegisterValidate.fetchChangeValidate(value)),
  handleValidateSuccess: value => dispatch(fetchValidateSuccess(value)),
});

RegisterContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
