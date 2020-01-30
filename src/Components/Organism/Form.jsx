import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (
            <form>
                <div className="ed-container" id="Formm" >
                    <div className="ed-item l-50 form__item">
                        <label>Nombre Completo</label>
                        <input type="text"></input>
                    </div>
                    <div className="ed-item l-50 form__item">
                        <label>Correo</label>
                        <input type="email"/>
                    </div>
                    <div className="ed-item form__item">
                        <label>Seleccione el tipo de problema</label>
                        <select name="opctionss" id="opt">
                            <option value="option1">FunkoPop Dañado</option>
                            <option value="option2">FunkoPop Equivocado</option>
                            <option value="option3">Otros</option>
                        </select>
                    </div>
                    <div className="ed-item form__item">
                        <input className="button full small" type="submit" value="Enviar"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;