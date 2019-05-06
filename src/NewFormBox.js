import React, { Component } from 'react'

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
    this.props.addBox(this.state)
    this.setState({ width: '', height: '', backgroundColor: '' })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='width'>Width: </label>
          <input name='width' id='width' value={this.state.width} onChange={this.handleChange} />
          <label htmlFor='height'>Height: </label>
          <input name='height' id='height' value={this.state.height} onChange={this.handleChange} />
          <label htmlFor='color'>Color: </label>
          <input name='color' id='color' value={this.state.color} onChange={this.handleChange} />
          <button>Box!</button>
        </form>
      </div>
    )
  }
}

export default NewFormBox
