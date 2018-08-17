import React from 'react';

const HeadlineList = (props) => {

  const headlines = props.newsInfo.map(item => {
    const url = item.url;
    return <h4><a href={url}>⦿ {item.title}</a></h4>
  })

  return (
      <React.Fragment>
        {headlines}
      </React.Fragment>
  )
}

export default HeadlineList;
