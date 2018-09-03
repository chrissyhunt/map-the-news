import React from 'react';

const SavedSearch = (props) => {
  return (
    <p className="list"><input type="button" value="x" onClick={props.deleteSearch} name={props.id} /> {props.query}</p>
  )
}

export default SavedSearch;
