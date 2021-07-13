import React, { Component } from "react";
import axios from "../axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: "",
      valuePassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    // console.log(this.state);
    event.preventDefault();

    await axios
      .post("/login", {
        email: this.state.valueEmail,
        password: this.state.valuePassword,
      })
      .then((res) => {
        localStorage.setItem("tok", res.data.token);
        localStorage.setItem("id_user", res.data.data._id);
        window.location = "/";
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log(localStorage.getItem('tok'))

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Connectez-vous</h3>

            <div className="form-group mt-2">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={this.state.valueEmail}
                onChange={(e) => {
                  this.setState({ valueEmail: e.target.value });
                }}
                placeholder="Entre votre email"
              />
            </div>

            <div className="form-group mt-2">
              <label>Mot de pass</label>
              <input
                type="password"
                className="form-control "
                value={this.state.valuePassword}
                onChange={(e) => {
                  this.setState({ valuePassword: e.target.value });
                }}
                placeholder="Entrer votre mot de pass"
              />
            </div>

            <button type="submit" className="btn mt-2 btn-primary btn-block">
              Connect
            </button>
          </form>
        </div>
      </div>
    );
  }
}
