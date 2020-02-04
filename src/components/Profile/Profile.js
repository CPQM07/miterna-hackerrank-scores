// Dependencies
import React, { Component } from 'react'
// Components
import ProfileInfo from './ProfileInfo'
import ProfileUnknown from './ProfileUnknown'

class Profile extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {profileName, profileId} = this.props

    if (profileId) {
      return <ProfileInfo profileName={profileName} />
    }
    return (
      <ProfileUnknown />
    )
  }
}

export default Profile
