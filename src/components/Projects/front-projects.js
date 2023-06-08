import React from "react";
import analysis from "../../assets/imgs/analysis.png";
import cast from "../../assets/imgs/cast.png";
import hjm from "../../assets/imgs/hjm.png";
import penetron from "../../assets/imgs/penetron.png";
import lawyer from "../../assets/imgs/lawyer.png";
import zahran from  '../../assets/imgs/zahran.png';
import portfolio from  '../../assets/imgs/portfolio.png';
import FV from "../../assets/imgs/fvision.png";
import T1 from "../../assets/imgs/T1.png";
import T2 from "../../assets/imgs/T2.png";
import T3 from "../../assets/imgs/T3.png";
import './Projects.css'


function FrontProjects() {

    const projects = [
        {
            image:zahran,
            title:"zahran website",
            link:"https://tasnimmustafa.github.io/zahran/ZAHRAN/pages/",
            category: ['all','frontend'],
        },
        {
            image:portfolio,
            title:"Portfolio",
            link:"https://tasnimmustafa.github.io/MyPortfolio/",
            category: ['all','frontend'],
        },
        {
            image:FV,
            title:"Website & Dashboard",
            link:"https://firstvision-eg.com/test/build1/",
            category: ['all','frontend','backend'],
        },
        {
            image:analysis,
            title:"Analysis laboratories & MS",
            link:"https://mylocalstream.com/analysis/",
            category: ['all', 'frontend'],
        },
        {
            image:cast,
            title:"Casting platform",
            link:"https://castmycrew.com/main",
            category: ['all', 'frontend'],
        },
        {
            image:hjm,
            title:"HJM Website & MS",
            link:"http://hjmadv.com/",
            category: ['all', 'frontend'],
        },
        {
            image:penetron,
            title:"Penetronegypt Website",
            link:"https://penetronegypt.net/",
            category: ['all', 'frontend'],
        },
        {
            image:lawyer,
            title:"lawyers' offices & MS",
            link:"https://attractionme.net/Lawyer/",
            category: ['all', 'frontend'],
        },
        {
            image:T1,
            title:"Template HTML&CSS",
            link:"https://tasnimmustafa.github.io/Template1/",
            category: ['all','frontend'],
        },
        {
            image:T2,
            title:"Template HTML&CSS",
            link:"https://tasnimmustafa.github.io/Template1/Template2/",
            category: ['all','frontend'],
        },
        {
            image:T3,
            title:"Template HTML & CSS & Bootstrap",
            link:"https://tasnimmustafa.github.io/Template1/Template3/",
            category: ['all','frontend'],
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

export default FrontProjects;