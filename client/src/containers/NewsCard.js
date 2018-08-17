import React from 'react';
import { Component } from 'react';
import Headline from '../components/NewsItems/Headline';


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
    const moreNews = this.props.newsInfo.length > 1 && !this.state.headlineActive && !this.state.moreLinkActive ? <p class="more-news"><a role="button" onClick={e => this.handleMoreClick(e)}>+ {this.props.newsInfo.length-1} more</a></p> : null;

    return (
      <div className={fullClass}>
        <Headline newsInfo={this.props.newsInfo[0]} handleHeadlineClick={this.handleHeadlineClick} headlineActive={this.state.headlineActive} />
        {moreNews}
      </div>
    )
  }
}

export default NewsCard;
