import React, { Component } from 'react'
import { Input } from 'antd'
import './CustomInput.css'

export default class CustomInput extends Component {
  constructor (props) {
    super(props)
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
