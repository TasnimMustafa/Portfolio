import React from "react";
import FV from "../../assets/imgs/fvision.png";
import './Projects.css'
import SM from "../../assets/imgs/sm.png";


function BackProjects() {

    const projects = [
        {
            image:SM,
            title:"Store MS",
            link:"https://github.com/TasnimMustafa/StoreMS",
            category: ['all','backend'],
        },
        {
            image:FV,
            title:"Website & Dashboard",
            link:"https://firstvision-eg.com/test/build1/",
            category: ['all','frontend','backend'],
        },

    ];


    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        projects.length>0&&
                        projects.map((project)=>(
                            <div className='col-md-4 mb-4 project-container text-center' style={{height:"210px"}} key={project.image}>
                                <img src={project.image} alt='project' style={{maxWidth:"100%",minWidth:"100%",maxHeight:"100%",minHeight:"100%",borderRadius:"6px"}}/>
                                <div className="overlay">
                                    <a href={project.link} className="icon" title={project.link} target='_blank'>
                                        <i className="fa-solid fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BackProjects;