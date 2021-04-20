import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  // constructor() {
  //   super() //this.
    state = {
      color: getRandomColor(),
      childrenColor: '#FFFFFF'
    }
  // }
  changeColor = () => {
    this.setState({
      color: this.state.childrenColor,
      childrenColor: getRandomColor() 
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
      <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
