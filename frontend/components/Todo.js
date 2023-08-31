import React from 'react'

export default class Todo extends React.Component {
  

  render() {
    const {name, complete} = this.props;

    return (
      <>
        <h2>{name}</h2>
      </>
    )
  }
}
