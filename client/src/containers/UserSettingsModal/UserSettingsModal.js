import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';
import MoreNews from '../../components/NewsModal/MoreNews';
import { deactivateUserSettingsBox } from '../../actions/News';

class UserSettingsModal extends Component {

  closeModal = (event) => {
    event.preventDefault();
    this.props.deactivateUserSettingsBox();
  }

  render() {
    return (
      <React.Fragment>
        <DarkenBackground />

        <div class="news-detail-modal">
          <CloseButton closeModal={this.closeModal} />
          <h1>User Settings</h1>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, { deactivateUserSettingsBox })(UserSettingsModal);
