import React from 'react';

const SavedSearch = (props) => {
  return (
    <p className="list"><button>x</button> {props.query}</p>
  )
}

export default SavedSearch;
