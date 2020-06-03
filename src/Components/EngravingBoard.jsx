import React, { Component } from 'react'
import CustomPreview from './CustomPreview'
import CustomInput from './CustomInput'
import TextOverlay from './TextOverlay'
// import Logo from '../m.svg'
import './EngravingBoard.css'

export default class EngravingBoard extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = { input: '' }
  }

  async onChange (e) {
    await this.setState({ input: e.target.value })
    await console.log(this.state.input)
  };

  render () {
    return (
      <div id="container">
        {/* <img id="logo" src={Logo} alt="Logo" /> */}
        <CustomPreview class="grid-item" />
        <CustomInput class="grid-item" onChange={this.onChange}/>
        <TextOverlay class="text-overlay" embellishment={this.state.input}/>
      </div>
    )
  }
}
