import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos, toggle, completedOnly} = this.props;
    return (
      <>
        {
          // todos.map(td => (
          //   <Todo key={td.id} id={td.id} name={td.name} completed={td.completed} toggle={toggle}/>
          // ))
          todos.reduce((acc, td) => {
            if(completedOnly || !td.completed){
              return acc.concat(
                <Todo key={td.id} id={td.id} name={td.name} completed={td.completed} toggle={toggle}/>
              );

            } 
            return acc;
          }, [])
        }
      </>
    )
  }
}
