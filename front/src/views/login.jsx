import React from 'react';

const Login = props => {
    return (
        <div className="logisteiner">
            <h1>Login</h1>
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
            </ul>
        </div>
    );
}

export default Login;