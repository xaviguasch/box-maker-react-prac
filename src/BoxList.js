import React, { Component } from 'react'
import Box from './Box'
import NewFormBox from './NewFormBox'
import uuid from 'uuid/v4'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [{ width: 10, height: 10, color: 'orange' }]
    }

    this.addBox = this.addBox.bind(this)
    this.removeBox = this.removeBox.bind(this)
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() }
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }))
  }

  removeBox(box) {
    console.log('removeBox got clicked', box)
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
        <Box
          color={box.color}
          height={box.height}
          width={box.width}
          key={box.id}
          removeBox={this.removeBox}
        />
      )
    })
    return (
      <div>
        <h1>Color Box Baker Thingy</h1>
        <NewFormBox addBox={this.addBox} />
        {boxes}
      </div>
    )
  }
}

export default BoxList
