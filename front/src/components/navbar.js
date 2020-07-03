import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';

const Navbar = props => {
    const { store, actions } = useContext(Context);

    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                    {
                        store.currentUser === null &&
                        <>
                            <li>
                                <Link className="nav-link" to="/register">Regístrate</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/login">Log-in</Link>
                            </li>
                        </>
                    }


                    {
                        !!store.currentUser ||
                        store.rolename != '' ||
                        store.rolename != null
                        &&
                        <>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link"
                                    to="/profile"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Mi perfil
                                </Link>
                            </li>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="dropdown-item" onClick={() => actions.logout(props.history)}>Cerrar Sesion</Link>
                                </li>
                            </ul>
                        </>
                    }

                </ul>

            </div>
        </nav >
    )
}

export default withRouter(Navbar);