import React,{Component} from 'react'
import UserCard from '../Molecules/UserCard'

class Users extends Component {

    // PARA CONSUMIR API MEDIANTE FETCH SE NECESITA CREAR EL METODO CONSTRUCTOR CON LAS props
    // Y CREAR THIS.STATE Y DARLE UN ARRAY VACIO []
    constructor(props) {
        super(props)
        this.state = {
            users : []
        }
    }
    // ESTO ME PERMITE QUE CUANDO SE MONTE EL COMPONENTE HAGA LA SIGUIENTE ACCION 
    // YA QUE JS ES ASINCRONO
    componentDidMount() {
        // SE TIENE QUE DAR FETCH A URL Y TAMBIEN UN OBJETO METHOD CON EL METODO EN ESTE CASO GET
        fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'})
        .then(response => response.json()) //SE TIENE QUE HACER ESTE CALLBACK
        .then(response2 => {            //Y DESPUES ESTE DE ACA 
            this.setState({     //EN ESTE SE TIENE QUE CAMBIAR EL ESTADO DE ARRIBA, users Con response2
                users: response2
            })
        } )
    }

    render() {
        const {users} = this.state      //SE CREA CONSTANTE CON USERS DE STATE Y EL VALOR DE THIS.STATE
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div>
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

export default Users