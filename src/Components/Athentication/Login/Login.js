import React, { useState } from 'react';
import toast from 'react-hot-toast';
import "./Login.css";
import avatar from '../../../avatar.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const { setLoggedInUser } = useContext(UserContext);

    // const history = useHistory()
    // const location = useLocation()
    // let { from } = location.state || { from: { pathname: "/" } };
    const loading = toast.loading('Adding...Please wait!');

    const loginForm = () => {

        const logindata = {
            userName: userName,
            password: password
        }
        const url = 'http://localhost:5050/auth/login'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(logindata)
        })
            .then(res => res.json())
            .then(data => {

                if (data === 'No user found') {
                    return swal("No user found!", "Please try again.", "error", { dangerMode: true });
                }
                if (data === 'Invalid password') {
                    return swal("Invaild Password!", "Please try again.", "error", { dangerMode: true });
                }
                if (data) {
                    toast.dismiss(loading);
                    // setUserInfo(data)
                    // setLoggedInUser(data);
                    return swal(`Successfully Log In`, `Welcome`, "success")
                    // .then(res => history.push(from));
                }

            })
    }
    return (

       <div className="main-container">
            <div className="container">
            <div className="row loginContainer">
                <div className="form login-form col-md-6">
                    <div>
                    <img className="avatar" src={avatar} alt="" />
                        <h5 className=" p-2">UserName</h5>
                        <input onChange={(e) => setUserName(e.target.value)} className="form-control " type="text" />
                    </div>
                    <div className="mt-2">
                        <h5 className=" p-2">Password</h5>
                        <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
                    </div>
                    <div className="mt-4">
                        <Link className="a" to="/">Forget Password</Link>
                        <Link className="a" to="/register">Sign Up</Link>
                    </div>
                    <button className="btn mt-4 loginBtn" style={{width:"305px"}} onClick={loginForm}>Login</button>
                </div>
                <div className="col-md-6">
                   
                </div>
            </div>
        </div>
       </div>
        //     <div className='login-content'>
        //     <div className="login-container-body">
        //         <div className="login-container container">
        //             <div className='form'>
        //                 <img className="avatar" src="" alt="avatar" />
        //                 <h2>Welcome</h2>
        //                 <div className="input-div one">
        //                     <div>
        //                         <h5>UserName</h5>
        //                         <input onChange={(e) => setUserName(e.target.value)} class="input" type="text" />
        //                     </div>
        //                 </div>
        //                 <div className="input-div two">
        //                     <div>
        //                         <h5>Password</h5>
        //                         <input onChange={(e) => setPassword(e.target.value)} class="input" type="password" />
        //                     </div>
        //                 </div>
        //                 <div className='forget-signup'>
        //                     <Link className="a" to="/">Forget Password</Link>
        //                     <Link className="a" to="/register">Sign Up</Link>
        //                 </div>
        //                 <input onClick={loginForm} type="submit" class="login-btn" value="Login" />
        //                 <button onClick={'googleLogin'} class="login-btn" value="">Login With Google</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;