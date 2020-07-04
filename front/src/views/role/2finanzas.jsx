import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilFinanzas = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil finanzas</h1>
        </>
    )
}

export default PerfilFinanzas