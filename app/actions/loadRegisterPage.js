let value = true;

const loadRegisterPage = () => {
  value = !value;

  return {
    type: 'LOAD_REGISTER_PAGE',
    payload: value,
  };
};

export default loadRegisterPage;
