import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';

class NewsModal extends Component {
  constructor() {
    super();
    this.state = {
      headline: '',
      description: '',
      url: ''
    }
  }

  render() {
    const activeNewsSource = this.props.application.activeNewsSource
    const newsItems = this.props.newsItems.news.filter(item => item.source === activeNewsSource)

    return (
      <React.Fragment>
        <DarkenBackground />

        <div class="news-detail-modal">
          <CloseButton />
          <FeaturedStoryDetails headline={'Test Headline'} description={'Test Description'} url={'#'}/>

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
