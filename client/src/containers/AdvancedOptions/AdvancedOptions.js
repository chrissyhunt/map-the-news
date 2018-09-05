import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ViewModeSelector from './ViewModeSelector';
import AdvancedSearchBox from './AdvancedSearchBox';
import LoadSavedSearches from './LoadSavedSearches';
import DarkenBackground from '../../components/DarkenBackground';

class AdvancedOptions extends Component {

  render() {
    return (
      <React.Fragment>
      <div class="options">
        <ViewModeSelector topStoriesMode={this.props.application.topStoriesMode} />
        <AdvancedSearchBox />
        <LoadSavedSearches />

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
    application: state.application
  }
}

export default connect(mapStateToProps)(AdvancedOptions);
