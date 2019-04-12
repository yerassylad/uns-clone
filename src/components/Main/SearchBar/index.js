import React from "react";
import { connect } from "react-redux";
import { updateSearchBar } from "../../../actions/Core/searchBarActions";

const SearchBar = props => {
  const { value, onChange } = props;
  return (
    <div>
      <input
        style={{ width: "100%" }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span>asdsadasd</span>
      <div>{value}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.core.searchBar
});

export default connect(
  mapStateToProps,
  { onChange: updateSearchBar }
)(SearchBar);
