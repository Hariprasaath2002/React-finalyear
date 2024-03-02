import { useLocation, useNavigate } from 'react-router-dom';
import './assests/style.css';
import React, { useEffect } from 'react';
// import logo from '.images/muthayammal_logo';


export let Loginpage = () => {

    const navigate=useNavigate();
    const location=useLocation();

    useEffect(() => {
        const isLoginPage = location.pathname === '/';
        document.body.classList.toggle('disable-overflow', isLoginPage);
        return () => {
            document.body.classList.remove('disable-overflow');
        };
    }, [location.pathname]);

    function handle()
    {
        navigate("/signup")
    }
    const togglePasswordVisibility = () => {
        var passwordInput = document.getElementById('password');
        var eyeIcon = document.querySelector('.password-toggle');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('bi-eye-slash');
            eyeIcon.classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('bi-eye');
            eyeIcon.classList.add('bi-eye-slash');
        }
    };

    return (
        <>
            <div class='body'>
            <div className="area" style={{overflowY:'hidden'}}>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <header className="row justify-content-md-center ms-lg-5" style={{ margin: 'auto' }}>
                    <div className="col-lg-2 col-md-5 col-sm-6 col-12 text-center">
                        <img src={require('./images/muthayammal_logo.png')} className="img-fluid mt-lg-3" alt="Muthayammal College Logo"/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6 col-12 text-center mt-3">
                        <div className="mec-title me-lg-5">
                            <h1 className="text-white fw-bold">Muthayammal Engineering College</h1>
                            <p className="text-white fw-light mt-sm-5 mt-lg-0">An Autonomous Institution</p>
                            <p className="text-white fw-light">Approved by AICTE | Affiliated to Anna University</p>
                        </div>
                    </div>
                </header>
                <div className="container mt-5">
                    <div className="first row justify-content-lg-evenly">
                        <div className="inner-first col-lg-4 col-12 ">
                            <div className="bg-white p-3" style={{ borderRadius: '20px', zIndex: 1 }}>
                                <h2 className="text-center mt-3 fw-bold" style={{ color: '#001aff', letterSpacing: '2px' }}>Login</h2>
                                <div className="form-body">
                                    <div className="input-container mt-5">
                                        <input placeholder="E-mail Address" className="input-field" type="email" />
                                        <label htmlFor="input-field" className="input-label">E-mail Address</label>
                                        <span className="input-highlight"></span>
                                    </div>
                                    <div className="input-container mt-5">
                                        <input id="password" placeholder="Password" className="input-field" type="password" />
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <span className="input-highlight"></span>
                                        <i onClick={togglePasswordVisibility} className="bi bi-eye-slash password-toggle"></i>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button  class="button1">
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                    <p className="mt-3 text-center" style={{ position: 'relative', zIndex: 2 }}>
                                        Don't have an account? <a  style={{ textDecoration: 'none', cursor: 'pointer' }} className='text-primary' 
                                        onClick={handle}>Create one</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div className="second col-lg-7  p-0">
                            <div className="carousel carousel-dark slide w-100 p-0" data-bs-ride="carousel" id="my" style={{borderRadius:'20px'}}>
                            <div className="carousel-inner" style={{borderRadius:'20px'}}>
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img src={require('./images/Muthayammalcollege.png')} className="d-block " alt="First slide" style={{height: '430px', width:'800px', marginLeft: '0px'}}/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={require('./images/muthyammalcaorusel2.jpg')} className="d-block " alt="Second slide" style={{height: '430px', width:'800px', marginLeft: '0px'}}/> 
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={require('./images/muthayammalcarousel3.jpg')} className="d-block" alt="Third slide" style={{height: '430px', width:'800px', marginLeft: '0px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
             </div>

            </div>
        </>
    );
}
