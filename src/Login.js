import React ,{useState} from 'react';
import { Link,useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault(); //preventDefault prevent the page to refresh again and again 

        //firebase  sign in 
        auth.signInWithEmailAndPassword(email,Password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        // firebase register 
        auth.createUserWithEmailAndPassword(email,Password).then((auth) => {
            
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> 
                    {/*e.target.value takes the input and this will be get ,apped in email variable and this will create a circle around variable email*/}

                    <h5> Password </h5>
                    <input type='password'value={Password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <button onClick={register} className='login__registrationButton'>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login;
