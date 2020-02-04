import React, {Component} from 'react';
import '../Styles/Styles.scss';
import Banner from './Molecules/Banner';
import Lista from '../Arrays/Lista.json';
import Cards from './Molecules/Cards';
import Form from './Organism/Form';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Card from './Molecules/Card';

// En esta pieza de codigo,modifico el componente App a clase y agrego un state
// dentro del state creo un array lista y le asigno los Valores de mi Lista.json
class App extends Component {

  state = {
    lista: Lista
  }
  // =================================

  render() {
    return (
    <Router>
      <Switch>
        <Route path="/" exact component={ () => (
          <>
          <Banner></Banner>

          <div className="ed-grid m-grid-3">
            {
              // aca declaro this.state y le agrego la funcion map la cual recorre el array
              // agrego el componente cards y le asigno e.valor segun el atributo
              this.state.lista.map( e => 
                <Cards 
                id={e.id} 
                title={e.title} 
                description={e.description}
                image={e.image}
                price={e.price}
                key={e.id}  
                />)
            }
          </div>
          <Form/>
          </>
        )}></Route>
        <Route path="/cards/:id" component={Card}/>
        <Route path="/cards" component={ () => 
          <div className="ed-grid m-grid-3">
          {
            // aca declaro this.state y le agrego la funcion map la cual recorre el array
            // agrego el componente cards y le asigno e.valor segun el atributo
            this.state.lista.map( e => 
              <Cards 
              id={e.id} 
              title={e.title} 
              description={e.description}
              image={e.image}
              price={e.price}
              key={e.id}  
              />)
          }
        </div>}/>
        <Route path="/form" component={Form}/>
        <Route component={ () => <div>
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
        }/>

      </Switch>
    </Router> )
  }
}


export default App;
