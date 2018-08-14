import React from 'react';

const SecondarySearchBox = (props) => {
  return (
    <div class="secondary-search">
      <label>Track this topic over time:</label><br />
      <button>&larrb; 1 week</button>
      <button>&larr; 1 day</button>
      <button>1 day &rarr;</button>
      <button>1 week &rarrb;</button>
      <button>&bigstar; Save</button>
    </div>
  )
}

export default SecondarySearchBox;
