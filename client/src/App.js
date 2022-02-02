import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin'
import Acceuil from './pages/Acceuil'
import InscriptionClinique from './pages/InscriptionClinique'
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <div className="container header-container">
          <div className="logo">
            <a href="acceuil">Acceuil</a>
          </div>
          <div>
            <a href="inscription">
              <button>Inscrire votre Clinique</button>
            </a>

          </div>
        </div>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/acceuil">
            <Acceuil />
          </Route>
          <Route path="/inscription">
            <InscriptionClinique />
          </Route>
          <Route path="">
            <Acceuil />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
