const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            username: null,
            password: null,
            confirmedPassword: null,
            error: null,
            currentUser: null,
            isAuthenticated: false,
            email: null,
            empresa: null,
            name: null,
            lastname: null,
            phone: null,
            avatar: null,
            rolename: null,
            clients: null,
            id_client: null,
            plan: null,
            is_active: null,
            objective: null,
            rutEmpresa: null,
        },

        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            handleChangeFiles: e => {
                setStore({
                    [e.target.name]: e.target.files[0]
                })
            },
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },
            login: (e, history, re_route) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/' , {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null,
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/' + re_route)
                        }
                    })
            },

            // ADMIN
            admin_login: (e, history) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/admin/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: store.username,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                username: null,
                                email: null,
                                password: null,
                                error: null,
                                rolename: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/admin/profile')
                        }
                    })
            },
            adminLoadClients: (id = '') => {
                const store = getStore()
                fetch(store.path + id, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'aplication/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                error: null,
                                clients: data
                            })
                        }
                    })
            },
            changeActiveStatus: (url) => {
                const store = getStore();
                let formData = new FormData()
                formData.append('active', store.is_active)

                fetch(store.path + url, {
                    method: "PUT",
                    body: formData
                })
                    .then(resp => resp.json())
            },

            // CLIENT
            
            register_client: (e, history) => {
                e.preventDefault();
                const store = getStore();
                if (store.password !== store.confirmedPassword) {
                    setStore({
                        error: "Contraseñas no son iguales"
                    })
                    return;
                }
                if (!store.email) {
                    setStore({
                        error: "Debe completar todos los campos"
                    })
                    return;
                }

                let formData = new FormData()
                formData.append('email', store.email)
                formData.append('password', store.password)

                fetch(store.path + '/register/client', {
                    method: 'POST',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/profile')
                        }
                    })
            },

            logout: (history) => {
                setStore({
                    currentUser: null,
                    isAuthenticated: false,
                    email: null,
                    password: null,
                    errors: null
                });
                sessionStorage.removeItem('currentUser');
                sessionStorage.removeItem('isAuthenticated');
                history.push('/')
            },

            createPlan: (e, client_id, client_mail, nutritionist_mail, history) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/client/plan/' + client_id + '/' + client_mail + '/' + nutritionist_mail, {
                    method: 'POST',
                    body: JSON.stringify({
                        client_id: store.currentUser.user.client_id,
                        client_email: store.currentUser.user.email,
                        objective: store.objective,
                   
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                objetivo: null
                            })
                            history.push('/confirm-account')
                        }
                    })
            },

            editEmpresaProfile: (e, rolename, id) => {
                e.preventDefault();
                const store = getStore();
                let formData = new FormData()
                formData.append('empresa', store.empresa)
                formData.append('description', store.description)

                fetch(store.path + '/edit/empresa/' + rolename + '/' + id, {
                    method: 'PUT',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                error: null,
                                empresa: null,
                                description: null,
                            })
                            window.location.reload()
                        }
                    })
            },

            editAvatar: (e, rolename, id) => {
                e.preventDefault();
                const store = getStore();
                let formData = new FormData()
                formData.append('avatar', store.avatar)
                formData.append('oldfilename', String(store.currentUser.user.avatar))

                fetch(store.path + '/avatar/edit/' + rolename + '/' + id, {
                    method: 'PUT',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                error: null,
                            })
                        }
                    })
            },

            getConfirmation: () => {
                const store = getStore()
                const data = {
                    email: store.email
                }
                fetch(store.path + '/reset_password/', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        if (data.success) {
                            setStore({
                                email_confirm_success: data.success
                            })
                        } else {
                            alert(data.msg)
                            setStore({
                                email_confirm_msg: data.msg,
                            })
                        }
                    })
            },

            getPasswordChange: (e, token, history) => {
                e.preventDefault();
                const store = getStore()
                const data = {
                    password: store.password
                }
                if(store.password !== store.confirmedPassword){
                        alert("Contraseñas no son iguales")
                    return;
                }
                fetch(store.path + '/reset_password/' + token, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        alert("Tu contraseña ha sido cambiada exitosamente")
                        history.push("/login")
                        setStore({
                            email: null,
                            password:null,
                            confirmedPassword:null,
                            error: null
                        })
                    })
            },

            contactUs:e => {                
                e.preventDefault();
                const store = getStore();
                fetch(store.path + '/contact-us',{
                    method: 'POST',
                    body: JSON.stringify({
                        name: store.name,
                        lastname: store.lastname,
                        email: store.email,
                        empresa: store.empresa,
                        message : store.comment
                    }),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp =>resp.json())
                .then(data =>{
                        if(data.msg){
                        setStore({
                            errors: data.msg
                        })
                    }else{
                        setStore({
                            name: null,
                            lastname: null,
                            email:null,
                            empresa:null,
                            message:null,
                            error:null,
                            success:data
                            
                        })
                    }
                })
            },

        }
    }
}



export default getState;