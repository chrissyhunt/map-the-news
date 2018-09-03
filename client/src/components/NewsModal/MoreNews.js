import React from 'react';
import ListHeadlineLink from './ListHeadlineLink';

const MoreNews = (props) => {

  const newsItems = props.newsItems.map(item => {
    return <ListHeadlineLink title={item.title} />
  })

  return (
    <div className="news-menu">
      <p className="menu">More from {props.sourceName}:</p>
      {newsItems}
    </div>
  )
}

export default MoreNews;
