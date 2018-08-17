import React from 'react';

const MoreNews = (props) => {

  return (
    <p class="more-news"><a role="button" onClick={e => props.handleMoreClick(e)}>+ {props.count} more</a></p>
  )
}

export default MoreNews;
