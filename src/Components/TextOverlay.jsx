import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TextOverlay.css'

export default class TextOverlay extends Component {
  static get propTypes () {
    return {
      children: PropTypes.any,
      embellishment: PropTypes.string
    }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div id="embellishment">
        {this.props.embellishment}
      </div>
    )
  }
}
