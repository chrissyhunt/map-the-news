import React from 'react';
import { Component } from 'react';
import moment from 'moment';

class SavedSearch extends Component {
  constructor() {
    super();
    this.state = {
      voteCount: 0
    }
  }

  upVote = (event) => {
    this.setState({
      voteCount: this.state.voteCount+1
    })
    this.updateSearch(event.target.name, this.state.voteCount)
  }

  updateSearch = (id, voteCount) => {
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`http://localhost:3000/api/searches/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(votes: voteCount)
    })
    .then(response => response.json())

  }

  render() {
    const startDate = moment(this.props.startDate).format("M/D/YYYY")
    const endDate = moment(this.props.endDate).format("M/D/YYYY")
    const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`

    return (
      <p className="list">
      <button onClick={this.upVote} name={this.props.id}>{this.state.voteCount}</button>
      <input type="button" value="x" onClick={this.props.deleteSearch} name={this.props.id} />
      <a role="button" name={this.props.id} onClick={this.props.loadSavedSearch}>{this.props.query}</a>
      <span className="date-range">{dateRange}</span></p>
    )
  }
}

export default SavedSearch;
