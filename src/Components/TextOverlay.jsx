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

  render () {
    return (
      <div className='text-block' id="embellishment">
        <bdi>
          {this.props.embellishment}
        </bdi>
      </div>
    )
  }
}
