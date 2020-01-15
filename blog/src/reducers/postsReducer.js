// handle for action 'FETCH_POSTs'
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      // donot match the case
      return state;
  }
};
// privious state -> check if undefine -> next state
