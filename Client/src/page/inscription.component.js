import React, { Component } from "react";
import axios from "../axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueNom: "",
      valuePrenom: "",
      valueEmail: "",
      valuePassword: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    await axios
      .post("/register", {
        nom: this.state.valueNom,
        prenom: this.state.valueNom,
        email: this.state.valueEmail,
        password: this.state.valuePassword,
      })
      .then((res) => {
        window.location = "/connect";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Inscription</h3>

            <div className="form-group mt-2">
              <label>Nom</label>
              <input
                type="text"
                value={this.state.valueNom}
                onChange={(e) => {
                  this.setState({ valueNom: e.target.value });
                }}
                className="form-control"
                placeholder="Ex: Rabe"
              />
            </div>

            <div className="form-group mt-2">
              <label>Prenom</label>
              <input
                type="text"
                value={this.state.valuePrenom}
                onChange={(e) => {
                  this.setState({ valuePrenom: e.target.value });
                }}
                className="form-control"
                placeholder="Ex: soa"
              />
            </div>

            <div className="form-group mt-2">
              <label>Email</label>
              <input
                type="email"
                value={this.state.valueEmail}
                onChange={(e) => {
                  this.setState({ valueEmail: e.target.value });
                }}
                className="form-control"
                placeholder="Ex: test@gmail.com"
              />
            </div>

            <div className="form-group mt-2">
              <label>Mot de pass</label>
              <input
                type="password"
                value={this.state.valuePassword}
                onChange={(e) => {
                  this.setState({ valuePassword: e.target.value });
                }}
                className="form-control"
                placeholder="Entre votre mot de pass"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-4">
              Inscrit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
