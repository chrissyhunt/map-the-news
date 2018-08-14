import React from 'react';

const NewsHeadlineCard = (props) => {
  console.log("inside NewsHeadlineCard, props: ", props)
  const fullClass = `news-item ${props.newsInfo.pubCode}`
  return (
    <div className={fullClass}>
      <h4>⦿ "{props.newsInfo.headline}"</h4>
      <p class="more-news">+ 2 more</p>
    </div>
  )
}

export default NewsHeadlineCard;
