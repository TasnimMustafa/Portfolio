import React, {useState} from "react";
import './Projects.css';
import {Link,Outlet} from "react-router-dom";

function Projects() {
    const [active,setActive]=useState('active');
    const [active1,setActive1]=useState('');
    const [active2,setActive2]=useState('');


    return (
        <>
            <section id='projects'>
                <div className='container-fluid'>
                    <div className='project-title mb-5 text-white d-flex justify-content-center align-items-center flex-column'>
                        <h2>Projects</h2>
                        <p>You Can See My Projects Here</p>
                    </div>

                    <div className='project-filters d-flex justify-content-center'>
                        <Link to='/Portfolio' onClick={() => {setActive('active');setActive1('');setActive2('')}} className={active}>All</Link>
                        <Link to='front' onClick={() => {setActive('');setActive1('active');setActive2('')}} className={active1}>Front-End</Link>
                        <Link to='back' onClick={() => {setActive('');setActive1('');setActive2('active')}} className={active2}>Back-End</Link>
                    </div>
                    <Outlet/>
                </div>
            </section>
        </>
    )
}

export default Projects;