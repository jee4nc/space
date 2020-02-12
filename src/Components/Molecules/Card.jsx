import React, {useState, useEffect} from 'react';
import Axios from 'axios'

//Match me permite poder acceder a parametros del patch de la ruta}
//Se crea una constante con el array importado, con el Find se busca alguna coincidencia y si la hay
//retornará segun la informacion que corresponde
const Card = ({ match }) => {

    const [state,setState] = useState({ })
    
    useEffect( () => {
        Axios.get(`https://my-json-server.typicode.com/jee4nc/myjsonserver/lista/${match.params.id}`)
        .then(response => setState(response.data))
    }, []) // <== Esto [] es para que useEffect se actualize solo una vez, y no genere el loop infinito
    
    // const product = Lista.find( p => p.id === parseInt(match.params.id))
    return (
        <div className="ed-grid m-grid-3">
                {
                    state ? (  //aca accedo a las propiedades de state mediante state.product
                                        //Es state.product porque product es lo que useState recibe
                        <>
                        <h1 className="m-cols-3"> {state.title} </h1>
                        <img className="m-cols-1" src={state.image} alt={ state.title }/>
                        <p className="m-cols-1"> {state.description} </p>
                        </>
                    )
                    :
                    (
                        <h1>This product not exits</h1>
                    )
                }
            </div>
        )
    }
export default Card;