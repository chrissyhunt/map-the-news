import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/News';

// reminder: only renders if search is active

class SearchNavBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms : {
        q: '',
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment().format("YYYY-MM-DD")
      }
    }
  }

  componentDidMount() {
    if (this.props.searchInfo.searchActive) {
      this.setState({
        searchTerms: this.props.searchInfo.currentSearch
      })
    }
  }

  backOneWeek = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).subtract(1, 'weeks').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  backOneDay = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).subtract(1, 'days').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  forwardOneDay = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).add(1, 'days').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  forwardOneWeek = (event) => {
    const newDate = moment(this.state.searchTerms.endDate).add(1, 'weeks').format("YYYY-MM-DD")
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        endDate: newDate,
        startDate: newDate
      }
    })
    this.props.fetchNews(this.state.searchTerms);
  }

  render() {
    return (
      <fieldset>
        <legend>Browse Results Over Time</legend>
        <button onClick={this.backOneWeek}>&rarr; 1 Week</button>
        <button onClick={this.backOneDay}>&rarr; 1 Day</button>
        <button onClick={this.forwardOneDay}>1 Day &larr;</button>
        <button onClick={this.forwardOneWeek}>1 Week &larr;</button>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { fetchNews })(SearchNavBox);
