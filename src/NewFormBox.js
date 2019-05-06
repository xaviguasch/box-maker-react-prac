import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewFormBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '',
      height: '',
      color: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newBox = { ...this.state, id: uuid() }
    this.props.createBox(newBox)
    this.setState({ width: '', height: '', backgroundColor: '', color: '' })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='width'>Width: </label>
          <input type='text' name='width' id='width' value={this.state.width} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            name='height'
            id='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='color'>Color: </label>
          <input type='text' name='color' id='color' value={this.state.color} onChange={this.handleChange} />
        </div>
        <button>Add New Box!</button>
      </form>
    )
  }
}

export default NewFormBox
