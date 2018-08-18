import React from 'react';

const MoreNews = (props) => {

  return (
    <p class="more-news">{props.itemActive}/{props.totalItems} · <a role="button" onClick={e => props.handleNextClick(e)}>Next</a></p>
  )
}

export default MoreNews;
