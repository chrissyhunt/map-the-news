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
      indexActive: 0
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

  handleNextClick = (event) => {
    event.preventDefault();
    const currentIndex = this.state.indexActive
    const nextIndex = currentIndex+1 === this.props.newsInfo.length ? 0 : currentIndex+1;
    this.setState({
      indexActive: nextIndex
    })
    console.log(this.state)
  }

  render () {
    console.log("inside NewsCard, props: ", this.props)
    console.log("inside NewsCard, state: ", this.state)
    const fullClass = `news-item ${this.props.source}`
    const more = this.props.newsInfo.length > 1 ? <MoreNews handleNextClick={this.handleNextClick} itemActive={this.state.indexActive+1} totalItems={this.props.newsInfo.length} /> : null;
    return (
      <div className={fullClass}>
        <Headline newsInfo={this.props.newsInfo[this.state.indexActive]} handleHeadlineClick={this.handleHeadlineClick} headlineActive={this.state.headlineActive} />
        {more}
      </div>
    )
  }
}

export default NewsCard;
