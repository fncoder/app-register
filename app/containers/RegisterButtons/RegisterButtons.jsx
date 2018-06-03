import { connect } from 'react-redux';
import { loadRegisterPage, loadLoginPage } from 'actions';
import RegisterButtons from 'components/RegisterButtons';

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(loadRegisterPage());
    dispatch(loadLoginPage());
  },
});

export default connect(null, mapDispatchToProps)(RegisterButtons);
