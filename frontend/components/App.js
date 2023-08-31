import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.fetchTodos();
  }

  render() {
    return(
      <>
        <TodoList todos={this.state.todos}/>
        <Form />
      </>
    )
  }
}
