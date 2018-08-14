import React from 'react';

const SecondarySearchBox = (props) => {
  return (
    <div class="secondary-search">
      <label>Track this topic over time:</label><br />
      <button>⇤ 1 week</button>
      <button>← 1 day</button>
      <button>1 day →</button>
      <button>1 week ⇥</button>
      <button>★ Save</button>
    </div>
  )
}

export default SecondarySearchBox;
