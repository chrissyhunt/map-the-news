import React from 'react';

const Headline = (props) => {
  const url = `${props.newsInfo.url}`
  // const newsDetails = props.headlineActive ? <p className="news-desc">{props.newsInfo.description} <a href={url}>More »</a></p> : null
  return (
    <React.Fragment>
      <h4><a role="button" onClick={e => props.handleHeadlineClick(e)}>{props.newsInfo.title}</a></h4>
    </React.Fragment>
  )
}

export default Headline;
