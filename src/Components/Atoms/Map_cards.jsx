import React,{Component} from 'react';
import Lista from "../../Arrays/Lista";
import Cards from "../Molecules/Cards";

// dentro del state creo un array lista y le asigno los Valores de mi Lista.json
class Map_cards extends Component {
    state = {
        lista: Lista
        }
    render(){
        return (
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
        )
    }
}
export default Map_cards;