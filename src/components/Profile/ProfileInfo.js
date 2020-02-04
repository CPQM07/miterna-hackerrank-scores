// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileInfo extends Component {
  static propTypes = {
    profileName: PropTypes.string.isRequired
  }
  render() {
    const {profileName} = this.props

    return (
      <div className='col-md-2 col-6 text-right'>
        <span className='badge rounded-lg total-score text-center p-3 my-2 mx-auto text-wrap badge-light border border-primary text-primary' >
          <p className='mb-0'>Perfil</p>
          <i className='fas fa-user fa-3x my-2 d-block' />
          <small>{profileName}</small>
        </span>
      </div>
    )
  }
}

export default ProfileInfo
