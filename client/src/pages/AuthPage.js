import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


export default function AuthPage() {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    
    }, [error, message, clearError])

    useEffect(() => {
       window.M.updateTextFields()
    
    }, [])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (error) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)
            auth.login(data.token, data.userId)
        } catch (error) {}
    }

    return (
        <div className="row">
           <div className="col s6 offset-s3">
               <h1>Url Shortener</h1>
               <div className="card cyan darken-4">
                <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                    <div>
                        <div className="input-field">
                            <input 
                                placeholder="Email" 
                                id="email" 
                                name="email" 
                                type="text"
                                className="formInput"
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input 
                                placeholder="Password" 
                                id="password" 
                                name="password" 
                                type="password" 
                                className="formInput"
                                onChange={changeHandler}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        
                    </div>
                </div>
                <div className="card-action">
                    <button 
                        onClick={loginHandler}
                        disabled={loading}
                        className="btn yellow darken-4"
                    >
                        Войти
                    </button>
                    <button 
                        onClick={registerHandler}
                        disabled={loading}
                        className="btn grey lighten-1 black-text"
                    >
                        Регистрация
                    </button>
                </div>
            </div>
           </div>
        </div>
    )
}
