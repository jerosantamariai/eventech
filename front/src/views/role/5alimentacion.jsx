import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilAlimentacion = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Alimentacion</h1>
        </>
    )
}

export default PerfilAlimentacion