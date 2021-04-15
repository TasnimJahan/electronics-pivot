import React, { useContext } from 'react';
import firebase from "firebase/app";
// import googleIcon from "../../icons/google.png"
// import deleteIcon from "../../icons/delete.png"
// import './Login.css'
// import LoginBg from "../../images/loginBg.png"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
// import LoginBg form '../../images/loginBg.png';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName , email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode,errorMessage,email,credential);
        });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);           
           history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
            <div className="login-page container m-5">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <h5 className="text-center mb-5">Login</h5>
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-5">
                            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        {/* <img className="img-fluid" src={LoginBg} alt="" /> */}
                    </div>
                </div>
          </div>
    );
};

export default Login;