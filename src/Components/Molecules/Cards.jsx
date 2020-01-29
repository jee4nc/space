import React from 'react'
import Proptypes from 'prop-types';
import Lista from '../../Arrays/Lista.json'
// import Lista from '../../Arrays/Lista.json'


const Cards = ({id,title,description,price,image}) => (
    <article className="card" id={id} >
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt="imagen"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {title}
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src={image} alt="imagen"/>
                </div>
                </div>
                <span className="small"> {description} </span>
            </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="/"> {price} </a>
            </div>
        </div>
    </article>
)

Cards.propTypes = {
    id: Proptypes.number,
    title: Proptypes.string,
    description: Proptypes.string,
    price: Proptypes.string,
    image: Proptypes.string
}

Cards.defaultProps = {
    title: "No se encontro titulo",
    image: "https://st3.depositphotos.com/3073455/18873/v/1600/depositphotos_188738686-stock-illustration-cartoon-cat-seller-vector-illustration.jpg",
    price: "--"
}
export default Cards;