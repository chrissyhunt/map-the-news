import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/News';

class BasicSearch extends Component {
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

  handleOnChange = event => {
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        [event.target.name]: event.target.value
      }
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.fetchNews(this.state.searchTerms);
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnSubmit(e)}>
        <input type="text" placeholder="Enter a topic or keyword..." name="q" class="searchbar" value={this.state.searchTerms.q} onChange={e => this.handleOnChange(e)}/>
        <input type="submit" value="Go" />
      </form>
    )
  }
}

export default connect(null, { fetchNews })(BasicSearch);
