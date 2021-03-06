import React from 'react'
import {GoogleOutlined} from '@ant-design/icons'
import "firebase/app"
import {auth} from '../firebase'
import firebase from 'firebase/app'
import Particle from './Particle'

const Login = () => {
    return(
        <div id='login-page'>
            <Particle />
            <div id='login-card'>
                <h2>Welcome to ChitChat!</h2>
                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign In with Google
                </div>
            </div>
        </div>
    )
}

export default Login