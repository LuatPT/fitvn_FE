
const getProvinceReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROVINCE':
      if (action.listProvince === []) {
        return state
      }else{
        return action.listProvince;
      }
    default:
      return state;
  }
};
export default getProvinceReducer;