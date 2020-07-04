import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Register = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="registeiner">
            <div className="loginsteiner">

                <div id="container-login" className="card col-md-6 col-xs-12 offset-md-4 my-3 font2">
                    <div className="my-3 mr-5 font2">
                        {
                            store.error &&
                            <>
                                <div className="alert alert-danger" role="alert">
                                    Las contraseñas no coinciden
                        </div>
                            </>
                        }
                        <h1>Regístrate</h1>

                        <form onSubmit={e => actions.register_client(e, props.history)}>
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
                                    value={store.email}
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
                                Crear nuevo cliente
                        </button>
                        </form>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;