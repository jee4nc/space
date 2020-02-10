import React, { Component} from 'react';
import Banner from "../Molecules/Banner";
import Form from "../Pages/Form";
import CardsGrid from "./CardsGrid";


class Main_menu extends Component {
    
    render() {
        return(
            <>
            <Banner></Banner>
            <CardsGrid/>
            <Form/>
            </>
        )
    }
}

export default Main_menu;