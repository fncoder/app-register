import { connect } from 'react-redux';
import { loadRegisterSuccessPopup } from 'actions';
import RegisterSuccess from 'components/RegisterSuccess';

const mapDispatchToProps = dispatch => ({
  handleRegisterSuccess: value => dispatch(loadRegisterSuccessPopup(value)),
});

export default connect(null, mapDispatchToProps)(RegisterSuccess);
