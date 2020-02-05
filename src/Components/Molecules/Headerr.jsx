import React from 'react';
import { NavLink, Link } from "react-router-dom"

const Headerr = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <Link to="/">
                <img className="main-logo" src="data:image/png;base64,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" alt="Logo EDteam"/>
            </Link>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink exact to="/" activeClassName="activo"> Inicio </NavLink></li>
                <li><NavLink to="/cards" activeClassName="activo"> Productos </NavLink></li>
                <li><NavLink to="/form" activeClassName="activo"> Formulario </NavLink></li>
                <li><NavLink to="/users" activeClassName="activo"> Usuarios </NavLink></li>
            </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
        </div>
    </header>
)

export default Headerr;