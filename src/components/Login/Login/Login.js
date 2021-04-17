import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import './login.css';
import google from '../../../images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const {displayName, email, photoURL} = user;
                const newUserInfo = {...loggedInUser};
                newUserInfo.isSignedIn = true;
                newUserInfo.name = displayName;
                newUserInfo.email = email;
                newUserInfo.image = photoURL;
                setLoggedInUser(newUserInfo);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="d-flex justify-content-center">
            <div className="login-area ">
                <h2 className="mb-3">Travel Valley</h2>
                <h5 className="mb-5">Login</h5>
                <input type="text" className="form-control mb-3" placeholder="username" />
                <input type="text" className="form-control mb-5" placeholder="password" />
                <Button onClick={handleGoogleSignIn} className="color-btn"><img style={{ height: '20px' }} className="mr-4" src={google} />Continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;