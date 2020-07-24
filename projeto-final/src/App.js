import React from 'react';
import Home from './Pages/Home';
import CriarBrincando from './Pages/Reciclar-CriarBrincando';
import Hortas from './Pages/Hortas';
import Telefones from './Pages/TelefonesUteis'
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Home {...props}/>}/>
        <Route path="/reciclar-e-criar-brincando" render={props => <CriarBrincando {...props}/>}/>
        <Route path="/hortas-reciclar" render={props => <Hortas {...props}/>}/>
        <Route path="/telefones-uteis" render={props => <Telefones {...props}/>}/>

      </Switch>
    </div>
  );
}

export default App;
