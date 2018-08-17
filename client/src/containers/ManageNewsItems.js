import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from '../containers/NewsCard';

class ManageNewsItems extends Component {

  render() {
    console.log(this.props.newsItems)
    return (
      <div>
        {this.props.newsSourceList.map(source => {
          if (this.props.newsItems[source] && this.props.newsItems[source].length > 0) {
            return <NewsCard newsInfo={this.props.newsItems[source]} source={source} />
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
