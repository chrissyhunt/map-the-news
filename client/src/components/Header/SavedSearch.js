import React from 'react';

const SavedSearch = (props) => {
  return (
    <p className="list"><input type="button" value="x" /> {props.query}</p>
  )
}

export default SavedSearch;
