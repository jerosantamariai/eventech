import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Eventech</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/quienessomos">Quiénes Somos<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/info">Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/precios">Precios</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/register">Regístrate</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/login" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Acción</Link>
                            <Link className="dropdown-item" to="#">Acción 1</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Acción 3</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;