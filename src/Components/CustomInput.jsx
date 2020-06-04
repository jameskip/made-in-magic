import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Checkbox } from 'antd'

import './CustomInput.css'

export default class CustomInput extends Component {
  constructor (props) {
    super(props)
    this.state = { checked: this.props.engravingChecked }
  }

  static get propTypes () {
    return {
      children: PropTypes.any,
      onChange: PropTypes.func,
      onCheck: PropTypes.func,
      engravingChecked: PropTypes.bool,
      onCheckboxChange: PropTypes.func
    }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div className="container">

        <div id="text-input">

          <div id="engraving-checkbox">
            <Checkbox onChange={this.props.onCheckboxChange}>Engraving</Checkbox>
          </div>
          <br /> <br />
          <Input
            disabled={this.props.engravingChecked}
            placeholder="Nick Papagiorgio"
            allowClear
            onChange={this.props.onChange}
            maxLength={30}
          />
        </div>
      </div>
    )
  }
}
