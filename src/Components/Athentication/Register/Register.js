import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import avatar from '../../../avatar.svg'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const profileData = {
        username: name,
        email: email,
        password: password,
    }
    console.log(profileData);
    const loading = toast.loading('Adding...Please wait!');

    const signupForm = (e) => {

        const url = 'http://localhost:5050/auth/register'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(res => {
                if (res) {
                    toast.dismiss(loading);
                    // reset();
                    return swal(`Successfully Sign Up`, `Welcome`, "success").then(res => history.push('/login'));
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }


    return (
        <div className="main-container ">
            <div className="container">
                <div className="row loginContainer">
                    <div style={{ height: "540px" }} className="form login-form col-md-6">
                        <div>
                            <img className="avatar" src={avatar} alt="" />
                            <h5 className=" p-2">UserName</h5>
                            <input onChange={(e) => setName(e.target.value)} className="form-control " type="text" />
                        </div>
                        <div className="mt-2">
                            <h5 className=" p-2">Email</h5>
                            <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name='email' />
                        </div>
                        <div className="mt-2">
                            <h5 className=" p-2">Password</h5>
                            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
                        </div>

                        <div className="mt-4 d-flex">
                            <div >
                                <h5>Have an Account</h5>
                            </div>
                            <div style={{marginLeft:"50px"}}>
                                <Link style={{ paddingLeft: "20px", paddingRight: "20px" }} className="a" to="/login">Login</Link>
                            </div>

                        </div>
                        <button className="btn mt-4 loginBtn" style={{ width: "305px" }} onClick={signupForm}>Sign Up</button>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
        //     <div className='login-content'>
        //     <div class="login-container-body">
        //         <div class="login-container container">
        //             <div className="form">
        //                 <img class="avatar" src={avatar} alt="" />
        //                 <h2>Welcome</h2>
        //                 <div class="input-div one">
        //                     <div class="i">
        //                         <i class="fas fa-user"></i>
        //                     </div>
        //                     <div>
        //                         <h5>User Name</h5>
        //                         <input onChange={(e) => setName(e.target.value)} class="input" type="text" name='username'  required />
        //                     </div>
        //                 </div>
        //                 <div class="input-div one">
        //                     <div class="i">
        //                         <i class="fas fa-user"></i>
        //                     </div>
        //                     <div>
        //                         <h5>Email</h5>
        //                         <input onChange={(e) => setEmail(e.target.value)} class="input" type="email" name='email' required="true" />
        //                     </div>
        //                 </div>
        //                 <div class="input-div two">
        //                     <div class="i">
        //                         <i class="fas fa-lock"></i>
        //                     </div>
        //                     <div>
        //                         <h5>Password</h5>
        //                         <input onChange={(e) => setPassword(e.target.value)}  class="input" type="password" name='password' required />
        //                     </div>
        //                 </div>
        //                 <div class='login-a'>
        //                     <Link className="a" to="/login">Login</Link>
        //                 </div>
        //                 <input onClick={signupForm} type="submit" class="login-btn" value="Sign Up" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Register;