import React,{useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const signIn = (e) =>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                if(auth){
                    history.push("/")
                }
            })
            .catch(error=>alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth)
                if(auth){
                    history.push("/")
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)} 
                        type="text"
                    />
                    <h5>Password</h5>
                    <input 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password" 
                    />
                    <button 
                        className="login__signInButton"
                        onClick={signIn}
                    >Sign in</button>
                </form>
                <p>
                    By signing in you agree to the AMAZON FAKE CLONE Conditions of use & sale. Please see our privacy notice, our cookies notice and our interest based ads notice.
                </p>
                <button 
                    className="login__registerButton"
                    onClick={register}
                >Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
