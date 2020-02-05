import React,{Component} from 'react'
import UserCard from '../Molecules/UserCard'
import Axios from 'axios'

class Users extends Component {

    // PARA CONSUMIR API MEDIANTE FETCH SE NECESITA CREAR EL METODO CONSTRUCTOR CON LAS props
    // Y CREAR THIS.STATE Y DARLE UN ARRAY VACIO []
    constructor(props) {
        super(props)
        this.state = {
            users : []
        }
    }

    //YARN ADD AXIOS e importarlo para facilitar el consumir una api
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState ( {
                users : response.data //axios devuelve un objeto, y data es la "data" del objeto
            })
        })
    }
    render() {
        const {users} = this.state      //SE CREA CONSTANTE CON USERS DE STATE Y EL VALOR DE THIS.STATE
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.map ( u =>        //Y SE MAPEA COMO YA SABEMOS
                            <UserCard
                            key={u.id}
                            name={u.name}
                            username={u.username}
                            email={u.email}
                            />)
                    }
                </div>
            </div>
        )
    }
}
    //Otra forma de hacerlo con fetch
    //====================================================================================
    // ESTO ME PERMITE QUE CUANDO SE MONTE EL COMPONENTE HAGA LA SIGUIENTE ACCION 
    // YA QUE JS ES ASINCRONO
    // componentDidMount() {
    //     // SE TIENE QUE DAR FETCH A URL Y TAMBIEN UN OBJETO METHOD CON EL METODO EN ESTE CASO GET
    //     fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'})
    //     .then(response => response.json()) //Primer then obtengo la respuesta y ejecuto cadena json
    //     .then(response2 => {            //una ves creado el json recien modifico estado
    //         this.setState({     //EN ESTE SE TIENE QUE CAMBIAR EL ESTADO DE ARRIBA, users Con response2
    //             users: response2
    //         })
    //     } )
    // }
    //=================================================================================================
    

export default Users