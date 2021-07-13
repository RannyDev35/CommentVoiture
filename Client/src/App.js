import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./page/login.component";
import Inscription from "./page/inscription.component";
import ListeVoiture from "./page/voiture.component";
import Ajouter from "./page/ajouterVoiture.component"

function App() {
  const deconnect = () => {
    localStorage.removeItem("tok");
    window.location = "/";
  };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Acceuil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/connect"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/inscrit"}>
                    Inscription
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={deconnect}>
                    Deconnecter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ajout"}>
                    Ajouter Voiture
                  </Link>
                </li>
                
              </ul>
            </div>
            {/* <p>voila {localStorage.getItem('tok')}</p> */}
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={ListeVoiture} />
          <Route path="/connect" component={Login} />
          <Route path="/inscrit" component={Inscription} />
          <Route path="/ajout" component={Ajouter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
