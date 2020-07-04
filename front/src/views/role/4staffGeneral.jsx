import React, { useContext } from "react"
import { Context } from "../../store/appContext"

const PerfilStaffGeneral= props => {
    const { store, actions } = useContext(Context)

    return (
        <>
        <h1>perfil Staff General</h1>
        </>
    )
}

export default PerfilStaffGeneral