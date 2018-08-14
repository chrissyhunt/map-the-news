import React from 'react';
import { Component } from 'react';
import NewsHeadlineCard from '../components/NewsItems/NewsHeadlineCard';

class ManageNewsItems extends Component {
  constructor() {
    super();
    this.state = {
      news: [{
        headline: "Welcome to the Resistance, Omarosa",
        author: "Michelle Goldberg",
        publication: "The New York Times",
        url: "https://www.nytimes.com/2018/08/13/opinion/columnists/omarosa-unhinged-book-trump-cult.html",
        pubCode: "ny-times"
      }]
    }
  }

  render() {
    console.log("inside ManageNewsItems")
    return (
      <div>
        <NewsHeadlineCard newsInfo={this.state.news[0]} />
      </div>
    )
  }
}

export default ManageNewsItems;
