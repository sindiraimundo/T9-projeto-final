import React from 'react';
import Home from './Pages/Home';
import CriarBrincando from './Pages/Reciclar-CriarBrincando';
import Hortas from './Pages/Hortas';
import LinksUteis from './Pages/LinksUteis';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Home {...props}/>}/>
        <Route path="/reciclar-e-criar-brincando" render={props => <CriarBrincando {...props}/>}/>
        <Route path="/hortas-reciclar" render={props => <Hortas {...props}/>}/>
        <Route path="/links-uteis" render={props => <LinksUteis {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
