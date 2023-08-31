import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        {
          this.props.todos.map(td => (
            <Todo key={td.id} name={td.name} complete={td.complete}/>
          ))
        }
      </>
    )
  }
}
