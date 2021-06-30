
const getDistrictReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DISTRICT':
      if (action.listDistrict === []) {
        return state
      }else{
        return action.listDistrict;
      }
    default:
      return state;
  }
};
export default getDistrictReducer;