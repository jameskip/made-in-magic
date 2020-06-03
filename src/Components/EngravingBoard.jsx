import React, { Component } from 'react'
import CustomPreview from './CustomPreview'
import Logo from '../m.svg'

export default class EngravingBoard extends Component {
  render () {
    return (
      <>
        <img src={Logo} alt="Logo" width="20%" height="auto" />
        <CustomPreview />
      </>
    )
  }
}
