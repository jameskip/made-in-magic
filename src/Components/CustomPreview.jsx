import React, { Component } from 'react'
import KnifePreview from '../knife-preview.png'
import './CustomPreview.css'

export default class CustomPreview extends Component {
  render () {
    return (
      <div>
        <img alt="Knife preview" id="knife-preview" src={KnifePreview} />
      </div>
    )
  }
}
