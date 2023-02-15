import React, {useEffect, useState} from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {

    const [isActive,setIsActive] = useState('');

    const changeActive = (value) => {
        setIsActive(value);
    };

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    useEffect(()=>{
        changeNavbarColor();
    },[]);
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <React.Fragment>
            <div className='container-fluid'>
        <nav className={`navbar-expand-lg navbar-light fixed-top ${colorChange ? 'navbar colorChange' : 'navbar'}`} style={{zIndex:'999'}} >
        <Link className="navbar-brand text-white" to='/Portfolio/' style={{fontFamily:"'Lobster Two', cursive",fontSize:"33px"}}>Tasneem</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="g collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className={isActive === 'home' ? 'active nav-link' : 'nav-link'} href='#home' onClick={()=>{changeActive('home')}}>Home</a>
            </li>
            <li className="nav-item">
                <a className={isActive === 'skills' ? 'active nav-link' : 'nav-link'} href='#skills' onClick={()=>{changeActive('skills')}}>Skills</a>
            </li>
            <li className="nav-item">
                <a className={isActive === 'projects' ? 'active nav-link' : 'nav-link'} href='#projects' onClick={()=>{changeActive('projects')}}>Projects</a>
            </li>
            </ul>
            </div>
            <div className='social d-flex align-items-center'>
            <ul className='list-unstyled d-flex m-0'>
                <li><a href="https://www.facebook.com/tasneem688?mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className='mx-2'><a href="https://github.com/TasnimMustafa"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/tasneem-moustafa-3740461b7"><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
            <a className="btnContact btn  my-2 my-sm-0" type="submit" href='#contact'>Let's Contact</a>
            </div>
        </div>
        </nav>
            </div>
        </React.Fragment>
    )
}

export default Nav;