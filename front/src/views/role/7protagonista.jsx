import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilProtagonista = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Protagonista</h1>
        </>
    )
}

export default PerfilProtagonista