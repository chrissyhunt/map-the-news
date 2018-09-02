import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SavedSearch from '../components/Header/SavedSearch';

class LoadSavedSearches extends Component {
  constructor() {
    super();
    this.state = {
      start: 0,
      end: 7
    }
  }

  pageForward = () => {
    this.setState({
      start: this.state.start+7,
      end: this.state.end+7
    })
  }

  pageBackward = () => {
    this.setState({
      start: this.state.start-7,
      end: this.state.end-7
    })
  }

  render() {
    const savedSearchList = this.props.userInfo.user.searches.slice(this.state.start, this.state.end).map(search => {
      return <SavedSearch key={search.id} query={search.q} />
    })

    const backButton = this.state.start > 0 ? <button onClick={this.pageBackward}>&laquo;</button> : null

    const forwardButton = this.state.end < this.props.userInfo.user.searches.length ? <button onClick={this.pageForward}>&raquo;</button> : null

    return (
      <div className="options-section">
        <fieldset>
          <legend>Load Saved Search</legend>
          {savedSearchList}
          <p className="list center">
            {backButton}
            {forwardButton}
          </p>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(LoadSavedSearches);
