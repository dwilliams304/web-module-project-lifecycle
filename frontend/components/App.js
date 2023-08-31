import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
    error: '',
    todoInput: '',
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(this.setErrors)
  }

  postTodo = () => {
    axios.post(URL, {name: this.state.todoInput})
      .then(res => {
        this.fetchTodos();
        this.resetForm();
      })
      .catch(this.setErrors)
  }

  setErrors = error => this.setState({...this.state, error: error.response.data.message})

  resetForm = () => this.setState({...this.state, todoInput: ''})

  componentDidMount(){
    this.fetchTodos();
  }

  addTodo = e => {
    e.preventDefault();
    this.postTodo();
  }

  handleChange = e => {
    const {value} = e.target;
    this.setState({...this.state, todoInput: value})
  }

  render() {
    return(
      <>
      {
        this.state.error && <h2>Error: {this.state.error}</h2>
      }
        <TodoList todos={this.state.todos}/>
        <Form 
          handleChange={this.handleChange} 
          inputValue={this.state.todoInput} 
          submit={this.addTodo}
        />
      </>
    )
  }
}
