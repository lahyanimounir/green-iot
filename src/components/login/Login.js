import React, { Component } from 'react'
import logo from '../../logo.svg';
import './login.css';

export class Login extends Component {
    render() {
        return (
            <div className="h-100">
               <div className="h-100">

                    <div className="d-flex justify-content-center h-100">

                        <div className="user_card">
                            <div className="d-flex justify-content-center">
                                <div className="brand_logo_container">
                                    <div className="brand_logo logo">
                                        <img src={logo} class="h-90" alt="Logo" />	
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    <div className="mb-3 text-center">
                                        <span className="title-iot">Green IOT</span>
                                    </div>
                                    <div className="input-group  mb-3 align-items-center">
                                        <div className="input-group-append w-25-px">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" name="" className="form-control input_user" placeholder="username" />
                                    </div>
                                    <div className="input-group  mb-2 align-items-center">
                                        <div className="input-group-append w-25-px">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" name="" className="form-control input_pass" placeholder="password" />
                                    </div>
                            
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button type="button" name="button" className="btn login_btn">Login</button>
                                    </div>
                                </form>
                            </div>
                    
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">
                                    <a href="#" class="colorfff">Mot de passe oublié ?</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Login
