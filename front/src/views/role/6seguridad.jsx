import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilSeguridad = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Seguridad</h1>
        </>
    )
}

export default PerfilSeguridad