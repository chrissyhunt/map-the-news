import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';

class NewsModal extends Component {


  render() {
    const activeNewsSource = this.props.application.activeNewsSource
    const newsItems = this.props.newsItems.allNews[activeNewsSource]
    console.log("active news source: ", activeNewsSource)
    console.log(newsItems)
    return (
      <React.Fragment>
        <DarkenBackground />

        <div class="news-detail-modal">
          <CloseButton />
          <FeaturedStoryDetails headline={newsItems[0]['title']} description={newsItems[0]['description']} url={newsItems[0]['url']}/>

          <div class="news-menu">
            <p class="menu">More from Source:</p>
            <p>Next link</p>
          </div>
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
