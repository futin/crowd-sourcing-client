import React from 'react'
import style from './Login.scss';

function Login({ onChange, errors, onLogin }) {
    return (
        <div className={style.login}>
            <input name='username' type='text' placeholder='User name' onChange={onChange} />
            {errors && <p>{errors.username}</p>}
            <input name='password' type='password' placeholder='Password' onChange={onChange} />
            {errors && <p>{errors.password}</p>}
            <div>
                <button type='button' className={style.forgotPass}></button> <small>Forgot password?</small>
            </div>
            <button type='submit' onClick={onLogin}>Log In</button>
        </div>
    )
}

export default Login;
