import React from 'react';
import { Component } from 'react';
import Headline from '../components/NewsItems/Headline';
import HeadlineList from '../components/NewsItems/HeadlineList';
import MoreNews from '../components/NewsItems/MoreNews';


class NewsCard extends Component {
  constructor() {
    super();
    this.state = {
      headlineActive: false,
      moreLinkActive: false
    }
  }

  handleHeadlineClick = (event) => {
    event.preventDefault();
    const updated = !this.state.headlineActive
    this.setState({
      headlineActive: updated
    })
    console.log(this.state)
  }

  handleMoreClick = (event) => {
    event.preventDefault();
    const updated = !this.state.moreLinkActive
    this.setState({
      moreLinkActive: updated
    })
  }

  render () {
    console.log("inside NewsCard, props: ", this.props)
    console.log("inside NewsCard, state: ", this.state)
    const fullClass = `news-item ${this.props.source}`
    const moreNews = this.props.newsInfo.length > 1 && !this.state.headlineActive && !this.state.moreLinkActive ? <MoreNews handleMoreClick={this.handleMoreClick} count={this.props.newsInfo.length-1} /> : null;
    const closeMore = this.props.newsInfo.length > 1 && !this.state.headlineActive && this.state.moreLinkActive ? <p class="more-news"><a role="button" onClick={e => this.handleMoreClick(e)}>- Close</a></p> : null;
    const headlineList = this.props.newsInfo.length > 1 && !this.state.headlineActive && this.state.moreLinkActive ? <HeadlineList newsInfo={this.props.newsInfo.slice(1)} /> : null;
    return (
      <div className={fullClass}>
        <Headline newsInfo={this.props.newsInfo[0]} handleHeadlineClick={this.handleHeadlineClick} headlineActive={this.state.headlineActive} />
        {headlineList}
        {moreNews}
        {closeMore}
      </div>
    )
  }
}

export default NewsCard;
