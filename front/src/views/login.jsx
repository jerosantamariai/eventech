import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Login = props => {
    const { store, actions } = useContext(Context)
    const handleSubmit = e => {
        actions.login(e, props.history, store.role, store.role == 4 ? 'profile' : 'profile/professional')
    }

    return (
        <div className="loginsteiner">
            {/* <h1>Login</h1>
            <p>Aqui debe venir un formulario donde se solicita solamente el mail y el password para poder entrar. <strong>Para ingresar el resto de la información se realizará una vez dentro del sistema.</strong></p>
            <br/>
            <p>El botón en el navbar debe tener un un renderizado condicional en donde se debe considerar los siguiente:</p>
            <ul>
                <li>Cuando no se esta logueado aparece solo lleva a "/login", mientras que cuando esta logueado aparece el nombre de la persona con un redireccionamiento a "/dashboard"</li>
                <li>Cuando se loguea muestra una foto tipo por defecto que viene en la BBDD y abre un dropdown con 3 cosas importantes</li>
                <ul>
                    <li>Perfil</li>
                    <li>Cambiar Password</li>
                    <li>Cerrar sesion con un separador de lo anterior</li>
                </ul>
            </ul> */}

            <div id="container-login" className="card col-md-6 col-xs-12 offset-md-4 my-3 font2">
                <div className="my-3 mr-5 font2">
                    {
                        store.error &&
                        <>
                            <div className="alert alert-danger" role="alert">
                                Usuario o contraseña incorrectos
                        </div>
                        </>
                    }
                    <h1>Iniciar sesión</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electronico</label>
                            <input
                                autoFocus
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Escriba su email"
                                name='email'
                                onChange={actions.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Escriba su contraseña "
                                name='password'
                                onChange={actions.handleChange}
                            />
                        </div>

                        <br />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-info btn-block my-3">
                            Login
                        </button>
                    </form>

                    <Link
                        to='/request_password'>
                        <small>Olvidé mi contraseña</small>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Login;