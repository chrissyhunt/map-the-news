import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';
import MoreNews from '../../components/NewsModal/MoreNews';
import { deactivateUserSettingsBox } from '../../actions/News';

class UserSettingsModal extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    }
  }

  componentDidMount() {
    if (this.props.userInfo.user) {
      this.setState({
        user: this.props.userInfo.user
      })
    }
  }

  closeModal = (event) => {
    event.preventDefault();
    this.props.deactivateUserSettingsBox();
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    // update user settings
  }

  render() {
    return (
      <React.Fragment>
        <DarkenBackground />

        <div class="user-settings-modal">
          <CloseButton closeModal={this.closeModal} />
          <div className="user-settings-detail">
            <h1>Update Your Account Settings</h1>
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="half-width left-half">
                <label>First Name:</label><br />
                <input type="text" value={this.state.user.firstName} name="firstName" onChange={e => this.handleChange(e)}/><br />
              </div>

              <div className="half-width right-half">
                <label>Last Name:</label><br />
                <input type="text" value={this.state.user.lastName} name="lastName" onChange={e => this.handleChange(e)}/><br />
              </div>

              <div className="full-width">
                <label>Email:</label><br />
                <input type="text" value={this.state.user.email} name="email" onChange={e => this.handleChange(e)}/><br />
              </div>

              <div classname="full-width">
                <label>New Password:</label><br />
                <input type="password" value={this.state.user.password} name="password" onChange={e => this.handleChange(e)}/><br />
              </div>

              <div className="full-width">
                <input type="submit" value="Update Account"/>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, { deactivateUserSettingsBox })(UserSettingsModal);
