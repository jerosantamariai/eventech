import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilComercial = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Comercial</h1>
        </>
    )
}

export default PerfilComercial