import React, {Component} from 'react';
import '../Styles/Styles.scss';
import Form from './Organism/Form';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Card from './Molecules/Card';
import Main_menu from "./Organism/Main_menu"
import Map_cards from "./Atoms/Map_cards";
import Not_found from "./Atoms/Not_found";
import Headerr from './Molecules/Headerr';
import Users from './Pages/Users';

// En esta pieza de codigo,modifico el componente App a clase y agrego un state
// dentro del state creo un array lista y le asigno los Valores de mi Lista.json

//Ejemplo de como hacer callback
/* <Route component={ () => <div>
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
        }/> */
class App extends Component {
  render() {
    return (
    <Router>
      <Headerr></Headerr>
      <Switch>
      <Route path="/" exact component={Main_menu}></Route>
        <Route path="/cards/:id" component={Card}/>
        <Route path="/cards" component={Map_cards}/>
        <Route path="/form" component={Form}/>
        <Route path="/users" component={Users}/>
        <Route component={Not_found}/>
      </Switch>
    </Router> )
  }
}


export default App;
