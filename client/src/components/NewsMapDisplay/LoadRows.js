import React from 'react';

const LoadRows = (props) => {
  return (
    <React.Fragment>
      <div class="row green-row"><h3>Original Fact Reporting</h3></div>
      <div class="row yellow-row"><h3>Fair Analysis & Opinion</h3></div>
      <div class="row orange-row"><h3>Incomplete Story</h3></div>
      <div class="row red-row"><h3>Propaganda & Nonsense</h3></div>
    </React.Fragment>
  )
}

export default LoadRows;
