import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Users extends Component {
  state = {
    users:[]
  }

  componentDidMount() {
    fetch("http://localhost:3333/api/users")
    .then(res => res.json())
    .then(data => {
      this.setState({
        users:data
      })
    })
    .catch(err => {throw err})
  }

  render(){
    return (
      <div className="App">
        {this.state.users.map(data => {
          return <ul>
          <NavLink to='/details'>{data.username}</NavLink>
          </ul>
        })}
      </div>
    )
  }
}

export default Users