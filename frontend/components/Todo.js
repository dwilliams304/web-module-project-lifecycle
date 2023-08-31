import React from 'react'

export default class Todo extends React.Component {
  

  render() {
    const {id, name, completed, toggle} = this.props;

    return (
      <div onClick={toggle(id)}>
        <h3>{name} {completed ? '✔️' : ''}</h3>
      </div>
    )
  }
}
