import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ViewModeSelector from '../components/Header/ViewModeSelector';
import AdvancedSearchBox from './AdvancedSearchBox';
import DarkenBackground from '../components/DarkenBackground';

class AdvancedOptions extends Component {

  render() {
    return (
      <React.Fragment>
      <div class="options">
        <ViewModeSelector />
        <AdvancedSearchBox />

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
  }
}

export default connect(mapStateToProps)(AdvancedOptions);
