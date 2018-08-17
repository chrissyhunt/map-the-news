import React from 'react';

const HeadlineList = (props) => {

  const headlines = props.newsInfo.map(item => {
    const url = item.url;
    return <li><a href={url}>{item.title}</a></li>
  })

  return (
      <ul>
        {headlines}
      </ul>
  )
}

export default HeadlineList;
