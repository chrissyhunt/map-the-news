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

  componentDidMount() {
    this.setState({
      voteCount: this.props.votes
    })
  }

  upVote = (event) => {
    let id = event.target.name
    let oldVoteCount = this.state.voteCount
    this.setState({
      voteCount: oldVoteCount+1
    }, () => this.updateSearch(id, this.state.voteCount))
  }

  updateSearch = (id, voteCount) => {
    const token = "bearer " + localStorage.getItem("jwt");
    fetch(`http://localhost:3000/api/searches/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({'votes': voteCount})
    })
    .then(response => response.json())
    .then(data => console.log(data))
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
