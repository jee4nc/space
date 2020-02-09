import React, { Component } from 'react';
import Axios from 'axios';
import CardsGrid from "../Pages/CardsGrid";

class Axios_cards extends Component {

    constructor(props) {

        super(props)
        this.state = {
            courses : []
        }      
    }
//                              FIX ME

    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/jee4nc/myjsonserver/lista')
        .then(response => this.setState({
                courses: response.data
            }))
    }
    render() {
        const {courses} = this.state
        return <CardsGrid courses={courses}/>
    }
}

export default Axios_cards;