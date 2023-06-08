import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';
import Email from "./Email";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';

function Footer() {
    return (
        <>
            <footer>
                <Email/>

                <div className='overlay-footer'></div>
                <div className='container-fluid'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-md-3 d-flex align-items-center justify-content-start logoFooter'>
                            <Link className="navbar-brand text-white" to='/' style={{fontFamily:"'Lobster Two', cursive",fontSize:"33px"}}>Tasneem</Link>
                        </div>
                        <div className='col-md-6 d-flex  align-items-center justify-content-center copyRights'>
                            <p className='m-0 text-center'>&copy; <a href='https://www.linkedin.com/in/tasneem-moustafa-3740461b7' target='_blank' style={{textDecoration:"none"}}>TASNEEM M. Elshamia</a> All Right Reserved.</p>
                        </div>
                        <div className='col-md-3 d-flex align-items-center justify-content-end socialFooter'>
                            <a href="https://www.linkedin.com/in/tasneem-moustafa-3740461b7" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/TasnimMustafa" target='_blank'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.facebook.com/tasneem688" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;