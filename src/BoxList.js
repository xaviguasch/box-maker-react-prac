import React, { Component } from 'react'
import Box from './Box'
import NewFormBox from './NewFormBox'
import uuid from 'uuid/v4'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    }

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  create(box) {
    let newBox = { ...box, id: uuid() }
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }))
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
        <Box
          key={box.id}
          id={box.id}
          color={box.color}
          height={box.height}
          width={box.width}
          removeBox={this.remove}
        />
      )
    })
    return (
      <div>
        <h1>Color Box Baker Thingy</h1>
        <NewFormBox createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList
