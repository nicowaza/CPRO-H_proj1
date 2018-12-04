import React, { Component } from "react";
import { withRouter } from 'react-router-dom'/*pour redirect à partir d'une action on doit utiliser withRouter*/
import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      lastname: "",
      firstname: "",
      avatarUrl: "",
      city: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentWillRecieveProps(nextProps){
  //   if(nextProps.errors){
  //     this.setState({errors: nextProps.errors})
  //   }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      avatarUrl: this.state.avatarUrl,
      city: this.state.city,
    };

    axios.post("http://localhost:3333/api/register", newUser)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.history.push('/')
  }
  render() {
    const { errors } = this.props

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Créez votre compte utilisateur</p>
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Pseudo"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Nom"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Prénom"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Url de votre avatar"
                    name="avatarUrl"
                    value={this.state.avatarUrl}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Ville"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <input
                  className="btn btn-info btn-block mt-4"
                  onSubmit={this.onSubmit}
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register