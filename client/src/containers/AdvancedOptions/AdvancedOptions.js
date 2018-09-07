import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ViewModeSelector from './ViewModeSelector';
import AdvancedSearchBox from './AdvancedSearchBox';
import LoadSavedSearches from './LoadSavedSearches';
import SearchNavBox from './SearchNavBox';
import DarkenBackground from '../../components/DarkenBackground';

class AdvancedOptions extends Component {

  render() {
    return (
      <React.Fragment>
      <div class="options">
        <div class="options-section">
          <ViewModeSelector topStoriesMode={this.props.application.topStoriesMode} />
          {this.props.searchInfo.searchActive && <SearchNavBox />}
        </div>
        {!this.props.application.topStoriesMode && <AdvancedSearchBox />}
        {!this.props.application.topStoriesMode && <LoadSavedSearches />}
      </div>
      <DarkenBackground />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
    searchInfo: state.searchInfo,
    application: state.application
  }
}

export default connect(mapStateToProps)(AdvancedOptions);
