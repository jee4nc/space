import React, { Component} from 'react';
import Lista from "../../Arrays/Lista";
import Banner from "../Molecules/Banner";
import Cards from "../Molecules/Cards";
import Form from "../Pages/Form";


class Main_menu extends Component {
    state = {
        lista: Lista
        }
    render() {
        return(
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
        )
    }
}

export default Main_menu;