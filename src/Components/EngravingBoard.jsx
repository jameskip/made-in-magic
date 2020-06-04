import React, { Component } from 'react'
import CustomPreview from './CustomPreview'
import CustomInput from './CustomInput'
import TextOverlay from './TextOverlay'
import './EngravingBoard.css'

export default class EngravingBoard extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.state = { input: 'Nick Papagiorgio', engravingChecked: false }
  }

  onChange (e) {
    this.setState({ input: e.target.value })
  }

  async onCheckboxChange (e) {
    await this.setState({ input: '', engravingChecked: e.target.checked })
    await console.log(this.state)
  }

  render () {
    return (
      <div id="container">
        <CustomPreview className="grid-item" />
        <CustomInput className="grid-item" onCheckboxChange={this.onCheckboxChange} onChange={this.onChange} engravingChecked={!this.state.engravingChecked} />
        <TextOverlay className="grid-item" embellishment={this.state.input}/>
      </div>
    )
  }
}
