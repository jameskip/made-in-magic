import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './CustomInput.css'

export default class CustomInput extends Component {
  static get propTypes () {
    return {
      children: PropTypes.any,
      onChange: PropTypes.func
    }
  }

  handleChange (e) {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div id="text-input">
        <Input
          placeholder="Nick Papagiorgio"
          allowClear
          onChange={this.props.onChange}
          maxLength={30}
        />
      </div>
    )
  }
}
