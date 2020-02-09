import React, { Component } from 'react'; //Se tiene que importar React

const withLoader = (WrappedComponent) => { //Esto se tiene que crear de esta maneraa
    return class whithLoader extends Component{
        constructor(props) { //Se tiene que crear un metodo constructor que reciba las props
            super(props)
        }
        render() {
            console.log(this.props);
            return <WrappedComponent {...this.props} />
        }
    }
}
export default withLoader;