import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilAdmin = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Admin</h1>
        </>
    )
}

export default PerfilAdmin