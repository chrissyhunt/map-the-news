import React from 'react';
import { Component } from 'react';
import moment from 'moment';

class SavedSearch extends Component {
  render() {
    const startDate = moment(this.props.startDate).format("M/D/YYYY")
    const endDate = moment(this.props.endDate).format("M/D/YYYY")
    const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`

    return (
      <p className="list"><input type="button" value="x" onClick={this.props.deleteSearch} name={this.props.id} /> <a role="button" name={this.props.id} onClick={this.props.loadSavedSearch}>{this.props.query}</a> <span className="date-range">{dateRange}</span></p>
    )
  }
}

export default SavedSearch;
