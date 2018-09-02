import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../components/DarkenBackground';

class AdvancedSearch extends Component {

  render() {
    return (
      <React.Fragment>
      <div class="options">
        <div class="options-section">
          <fieldset>
            <legend>Select view mode</legend>
            <label><input type="radio" name="view" id="topStories" checked /> Top Stories</label>
            <label><input type="radio" name="view" id="search" />Search by Topic</label>
          </fieldset>
        </div>
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

export default connect(mapStateToProps)(AdvancedSearch);
