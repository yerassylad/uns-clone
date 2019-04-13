import React from "react";
import { connect } from "react-redux";
import InputElement from './InputElement'
import { updateSearchBar } from "../../../actions/Core/searchBarActions";

const SearchBar = props => {
  const { value, onChange } = props;
  return (
        <InputElement value={value} onChange={onChange} />
  );
};

const mapStateToProps = state => ({
  value: state.core.searchBar
});

export default connect(
  mapStateToProps,
  { onChange: updateSearchBar }
)(SearchBar);
