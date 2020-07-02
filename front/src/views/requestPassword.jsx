import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const RequestPassword = props => {
    const { store, actions } = useContext(Context)
    // useEffect(() => {
    // }, [actions, token])
    return (

        <div className="requestPassw">

            <div id="container-requestPass" className="card col-md-6 col-xs-12 offset-md-4 my-3 font2">
                <div className=" my-3 mr-5 font2">
                    <h1 className="my-2 text-center">Cambie su contraseña</h1>
                    <form>
                        <br />
                        <div className="form-group">
                            <label htmlFor="LoginConsuEmail">Email</label>
                            <input
                                autoFocus
                                type="email"
                                name="email"
                                placeholder="Escriba su email"
                                onChange={e => actions.handleChange(e)}
                                className="form-control"
                            />
                            <br />

                            <button
                                className="btn btn-danger btn-block my-3"
                                onClick={() => actions.getConfirmation()} >
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RequestPassword