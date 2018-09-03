import React from 'react';

const SavedSearch = (props) => {
  return (
    <p className="list"><input type="button" value="x" onClick={props.deleteSearch} name={props.id} /> <a role="button" name={props.id} onClick={props.loadSavedSearch}>{props.query}</a></p>
  )
}

export default SavedSearch;
