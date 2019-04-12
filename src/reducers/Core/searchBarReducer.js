const defaultState = "";

export default (state = defaultState, action) => {
  if (action.type === "UPDATE_SEARCH_BAR") {
    return action.payload;
  }
  if (action.type === "CLEAR_SEARCH_BAR") {
    return defaultState;
  }
  return state;
};
