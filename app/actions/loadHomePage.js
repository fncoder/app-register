import { LOAD_HOME_PAGE } from 'constants/actionTypes.js';

let value = false;

const loadHomePage = () => {
  value = !value;

  return {
    type: LOAD_HOME_PAGE,
    payload: value,
  };
};

export default loadHomePage;
