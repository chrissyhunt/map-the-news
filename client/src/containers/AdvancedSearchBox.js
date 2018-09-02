import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class AdvancedSearchBox extends Component {

  render() {
    return (
      <div className="options-section">
        <form>
          <fieldset>
            <legend>Search the news</legend>

            <div className="form-section full-width">
              <label>Enter a topic or keyword:</label><br />
              <input type="text" name="q" />
            </div>

            <div className="form-section half-width left-half">
              <label>Select a start date:</label><br />
              <input type="date" name="startDate" />
            </div>

            <div className="form-section half-width right-half">
              <label>Select an end date:</label>
              <input type="date" name="endDate" />
            </div>

            <div className="form-section half-width left-half">
              <input type="submit" value="Search" />
            </div>

            <div className="form-section half-width right-half right">
              <input type="button" value="Save" />
              <input type="button" value="Clear" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
  }
}

export default connect(mapStateToProps)(AdvancedSearchBox);
