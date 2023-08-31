import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos, toggle} = this.props;
    return (
      <>
        {
          todos.map(td => (
            <Todo key={td.id} id={td.id} name={td.name} completed={td.completed} toggle={toggle}/>
          ))
        }
      </>
    )
  }
}
