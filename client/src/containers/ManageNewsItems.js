import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import NewsHeadlineCard from '../components/NewsItems/NewsHeadlineCard';

class ManageNewsItems extends Component {

  render() {
    console.log(this.props.newsItems)
    return (
      <div>
        {this.props.newsSourceList.map(source => {
          if (this.props.newsItems[source] && this.props.newsItems[source].length > 0) {
            return <NewsHeadlineCard newsInfo={this.props.newsItems[source][0]} />
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList
  }
}

export default connect(mapStateToProps)(ManageNewsItems);
