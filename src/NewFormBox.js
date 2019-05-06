import React, { Component } from 'react'

class NewFormBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()

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
          <label htmlFor='backgroundColor'>Background Color: </label>
          <input
            name='backgroundColor'
            id='backgroundColor'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Box!</button>
        </form>
      </div>
    )
  }
}

export default NewFormBox
