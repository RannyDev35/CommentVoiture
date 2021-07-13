import React, { Component } from "react";
import axios from "../axios";

export default class Ajout extends Component {
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
      .post("/create-voiture", {
        marque: this.state.valueMarque,
        model: this.state.valueModel,
        numero: this.state.valueNum
      })
      .then((res) => {
        window.location = "/";
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
            <h3>AJOUTER VOITURE</h3>

            <div className="form-group mt-2">
              <label>Marque</label>
              <input
                type="text"
                value={this.state.valueMarque}
                onChange={(e) => {
                  this.setState({ valueMarque: e.target.value });
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-2">
              <label>Model</label>
              <input
                type="text"
                value={this.state.valueModel}
                onChange={(e) => {
                  this.setState({ valueModel: e.target.value });
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mt-2">
              <label>Numero</label>
              <input
                type="text"
                value={this.state.valueNum}
                onChange={(e) => {
                  this.setState({ valueNum: e.target.value });
                }}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-4">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    
    );
  }
}
