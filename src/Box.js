import React, { Component } from 'react'

class Box extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.removeBox(this.props.id)
  }

  render() {
    const styles = {
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
      backgroundColor: this.props.color
    }
    return (
      <div>
        <div style={styles} />
        <button onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

export default Box
