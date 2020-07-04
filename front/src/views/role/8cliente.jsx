import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilCliente = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Cliente</h1>
        </>
    )
}

export default PerfilCliente