import React, { Component } from 'react'
import Box from './Box'
import NewFormBox from './NewFormBox'

class BoxList extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    width: '50px',
    height: '50px',
    backgroundColor: 'red'
  }

  addBox(box) {}

  render() {
    return (
      <div>
        <h1>BoxList Component</h1>
        <NewFormBox />
        <Box
          backgroundColor={this.props.backgroundColor}
          height={this.props.height}
          width={this.props.width}
          addBox={this.props.addBox}
        />
      </div>
    )
  }
}

export default BoxList
