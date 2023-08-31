import React from 'react'

export default class Form extends React.Component {
  render() {
    const {handleChange, inputValue, submit} = this.props;

    return (
      <form onSubmit={submit}>
        <input 
          type='text' 
          onChange={handleChange}
          value={inputValue}
          placeholder='Enter new todo...' 
        />

        <input type='submit' value='Add todo!' />
        
      </form>
    )
  }
}
