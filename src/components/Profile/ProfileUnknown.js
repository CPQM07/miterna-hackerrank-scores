// Dependencies
import React, { Component } from 'react'

class ProfileUnknown extends Component {
  render() {
    return (
      <div className='col-md-2 col-6 text-right'>
        <span className='badge rounded-lg total-score text-center p-3 my-2 mx-auto text-wrap badge-light border border-dark text-muted'>
          <p className='mb-0'>Perfil</p>
          <i className='fas fa-user fa-3x my-2 d-block' />
          <small>No hay Perfil asociado</small>
        </span>
      </div>
    )
  }
}

export default ProfileUnknown
