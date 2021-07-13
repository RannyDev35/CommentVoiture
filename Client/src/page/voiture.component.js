import React, { Component } from "react";
import "./css/listevoiture.css";
import axios from "../axios";

export default class Voiture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voiture: [],
      connect: false,
      value: {},
      valueText: '',
    };
  }

  // recuperer les variable dans le base de donne
  async componentDidMount() {
      
    await this.getVoiture();
    if (localStorage.getItem("tok")) {
      this.setState({ connect: true });
    }
  }

  // Recuperer le commentaire


  async handleSubmit(obj) {
    // console.log(this.state.value[marque]);

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("tok")}` },
    };

    const bodyParameters = {
        uncommentaire: this.state.valueText,
    };
    const userId = localStorage.getItem("id_user");
   

    axios
      .put(
        `/comment-voiture/${userId}/${obj._id}`,bodyParameters,config).then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        console.log("non recute");
      });
  }

  async getVoiture() {
    await axios.get("/all-voitures").then((response) => {
      if (response.status === 200) {
          console.log(response.data.voitures)
        this.setState({
          voiture: response.data.voitures,
        });
      }
    });
  }

  render() {
    const voiture = this.state.voiture;
    const token = localStorage.getItem("tok");

    return (
      <>
        <br />
        <br />
        {voiture.length === 0 ? (
            <center>
            <br />
            <br />
            <h2 className="text-white">
              N'y a pas de voiture <br />
              Ajoutez vous au moin un voiture
            </h2>
            
            <button
                onClick={() =>
                    window.location = "/ajout"
                }
                className="btn mt-2 btn-primary btn-block"
            >
                Ajouter un Voiture
            </button>

          </center>
         
        ) : (
           <>
           {voiture.map((obj, index) => {
                return (
                  <>
                    <div class="d-flex">
                      <div class="p-2 w-50 bg-dark text-white">
                        <div>
                          <center>Voiture {index+1}</center>
                          <div className="d-flex justify-content-around bg-success m-1">
                            <h5 className="m">Model:</h5>
                            <p>{obj.model}</p>
                          </div>
                          <div className="d-flex justify-content-around bg-success m-1">
                            <h5 className="m">Marque:</h5>
                            <p>{obj.marque}</p>
                          </div>
                          <div className="d-flex justify-content-around bg-success m-1">
                            <h5 className="m">Numero:</h5>
                            <p></p>
                          </div>
                        </div>
    
                        {token ? (
                          <div>
                            <textarea
                              placeholder="Ecrivez votre comentaire ici !"
                              className="pb-cmnt-textarea col-md-12 h-50"
                              name={obj.marque}
                              value={this.state.valueText}
                              onChange={(e) => {
                                this.setState({ valueText: e.target.value });
                              }}
                            ></textarea>
                            <button
                              className="btn btn-primary col-md-6"
                              type="button"
                              onClick={() => this.handleSubmit(obj)}
                            >
                              Commenter
                            </button>
                          </div>
                        ) : (
                          <center>
                            <button
                              onClick={() =>
                                alert(
                                  "Pour commenter connect vous dabord! clic sur login pour connecter"
                                )
                              }
                              className="btn mt-2 btn-primary btn-block"
                            >
                              commenter
                            </button>
                          </center>
                        )}
                      </div>
    
                      {token ? (
                        <div class=" w-50 bg-white">
                          <table class="table table-bordered table-striped mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Utilisateur</th>
                                <th scope="col">Commentaire</th>
                              </tr>
                            </thead>
                            {obj.commentaire.length === 0 ? (
                              <center>N'y pas de commentaire</center>
                            ) : (
                              obj.commentaire.map((com) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <td>{com.user ? com.user.email : null}</td>
                                        <td>{com.commentaire}</td>
                                      </tr>
                                    </tbody>
                                  </>
                                );
                              })
                            )}
                          </table>
                        </div>
                      ) : null}
                    </div>
    
                    <hr />
                  </>
                );
              })
            }
            </>
        )}
      </>
    );
  }
}
