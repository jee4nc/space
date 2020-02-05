import React from 'react';
import Lista from '../../Arrays/Lista';

//Match me permite poder acceder a parametros del patch de la ruta}
//Se crea una constante con el array importado, con el Find se busca alguna coincidencia y si la hay
//retornará segun la informacion que corresponde
const Card = ({ match }) => {
    const product = Lista.find( p => p.id === parseInt(match.params.id))
    return (
        <div className="ed-grid m-grid-3">
                {
                    product ? (
                        <>
                        <h1 className="m-cols-3"> {product.title} </h1>
                        <img className="m-cols-1" src={product.image} alt={ product.title }/>
                        <p className="m-cols-1"> {product.description} </p>
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