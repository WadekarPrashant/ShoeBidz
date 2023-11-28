
import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate("/");
        })
        .catch(error => alert(error.message))
    }

    const register= e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // This means it successfully created a user with email and password
            console.log(auth);
            if(auth){
                navigate("/");
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
      <Link to='/'>
                <img
                    className="login__logo"
                    src='https://images.unsplash.com/photo-1696539681566-98da5a8649c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60S' 
                />
            </Link>

            <div className='login__container'>
                <h1 className='SignInButton'>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the SHOEBIDZ's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your ShoeBidz Account</button>
            </div>

    </div>
  )
}

export default Login
