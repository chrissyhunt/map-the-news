import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';
import MoreNews from '../../components/NewsModal/MoreNews';

class NewsModal extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }

  updateIndex = (newIndex) => {
    this.setState({
      activeIndex: newIndex
    })
  }

  render() {
    const activeNewsSource = this.props.application.activeNewsSource
    const newsItems = this.props.newsItems.allNews[activeNewsSource]
    const sourceName = this.props.newsItems.allNews[activeNewsSource][0].source.name
    console.log("active news source: ", activeNewsSource)
    console.log(newsItems)
    return (
      <React.Fragment>
        <DarkenBackground />

        <div class="news-detail-modal">
          <CloseButton />
          <FeaturedStoryDetails headline={newsItems[this.state.activeIndex]['title']} description={newsItems[this.state.activeIndex]['description']} url={newsItems[this.state.activeIndex]['url']}/>
          <MoreNews sourceName={sourceName} newsItems={newsItems} />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
    application: state.application
  }
}

export default connect(mapStateToProps)(NewsModal);
