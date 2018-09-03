import React from 'react';

const ViewModeSelector = (props) => {

  return (
    <div class="options-section">
      <fieldset>
        <legend>Select view mode</legend>
        <label><input type="radio" name="view" id="topStories" defaultChecked /> Top Stories</label>
        <label><input type="radio" name="view" id="search" />Search by Topic</label>
      </fieldset>
    </div>
  )
}

export default ViewModeSelector;
