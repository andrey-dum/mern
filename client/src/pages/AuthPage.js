import React, {useState} from 'react'

export default function AuthPage() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="row">
           <div className="col s6 offset-s3">
               <h1>Сократить ссылку</h1>
               <div className="card blue-grey lighten-4">
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
                    <button className="btn yellow darken-4">Войти</button>
                    <button className="btn grey lighten-1 black-text">Регистрация</button>
                </div>
            </div>
           </div>
        </div>
    )
}
