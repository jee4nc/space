import React, { Component } from 'react';
import Axios from 'axios';
import Cards from '../Molecules/Cards';

class Axios_cards extends Component {

    constructor(props) {

        super(props)
        this.state = {
            courses : []
        }      
    }


    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/jee4nc/myjsonserver/lista')
        .then(response => this.setState({
                courses: response.data
                
        }))
    }
    render() {
        
        const { courses } = this.state
        return (
            <>

            <div className="ed-grid m-grid-3">

            {courses.length===0 ?
                <h1>Cargando...</h1> :
                courses.map(u =>        //Y SE MAPEA COMO YA SABEMOS
                                <Cards
                                key={u.id}
                                id={u.id}
                                title={u.title}
                                description={u.description}
                                image={u.image}
                                email={u.email}
                                price={u.price}
                                />)
                                
            }
            </div>
            </>
        )
    }
}

export default Axios_cards;