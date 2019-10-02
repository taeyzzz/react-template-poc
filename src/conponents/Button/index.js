import React from 'react'

export default class Button extends React.PureComponent{
  handleCliick = () => {
    this.props.onClick()
  }
  render(){
    return (
      <button onClick={this.handleCliick}>{this.props.text}</button>
    )
  }
}
