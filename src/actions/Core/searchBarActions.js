export const updateSearchBar = searchTerm => {
  return {
    type: "UPDATE_SEARCH_BAR",
    payload: searchTerm
  };
};

export const clearSearchBar = () => {
  return {
    type: "CLEAR_SEARCH_BAR"
  };
};
