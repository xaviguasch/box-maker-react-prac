import React, { Component } from 'react'

class Box extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor
    }

    console.log(styles)

    return <div style={styles} />
  }
}

export default Box
