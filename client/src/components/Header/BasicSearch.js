import React from 'react';

const BasicSearch = (props) => {
  return (
      <form>
        <input type="text" placeholder="Enter a topic or keyword..." class="searchbar" />
        <input type="submit" value="Go" />
      </form>
  )
}

export default BasicSearch;
