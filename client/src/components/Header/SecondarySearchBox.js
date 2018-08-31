import React from 'react';

const SecondarySearchBox = (props) => {
  return (
    <div class="secondary-search">
      <label>Track this topic over time:</label><br />
      <button onClick={e => props.backOneWeek(e)}>⇤ 1 week</button>
      <button onClick={e => props.backOneDay(e)}>← 1 day</button>
      <button onClick={e => props.forwardOneDay(e)}>1 day →</button>
      <button onClick={e => props.forwardOneWeek(e)}>1 week ⇥</button>
      <button onClick={() => props.saveSearch()}>★ Save</button>
    </div>
  )
}

export default SecondarySearchBox;
