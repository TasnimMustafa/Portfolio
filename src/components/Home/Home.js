import React from "react";
import './Home.css';
import img1 from '../../assets/imgs/banner2.gif';
import TypeWriterEffect from 'react-typewriter-effect';


function Home() {

    return (
        <React.Fragment>
            <section id="home" className="home">
            <div className='banner'></div>
             <div className="container-fluid">
                 <div className="row banner-content mb-5">
                     <div className="col-md-6 d-flex justify-content-center mt-5">
                         <div className="content">
                             <div className="banner-title1">
                                 <h4>Hello !</h4>
                                 {/*<h4>Welcome All in My Portfolio</h4>*/}
                             </div>
                             <div className="banner-title2">
                                 <h1>I'm Tasneem Elshamia ,
                                 <span>
                                     <TypeWriterEffect
                                         startDelay={1000}
                                         cursorColor="var(--background-color)"
                                         multiText={[
                                             'Front-End Developer.',
                                             'Back-End Developer.',
                                             'Full-Stack Developer.',

                                         ]}
                                         multiTextDelay={2000}
                                         typeSpeed={50}
                                         multiTextLoop
                                     />
                                 </span>
                                 </h1>
                             </div>
                             <h4 className='banner-title3 mt-4'>I have 1 year of experience in Web Development.</h4>
                             <a href='#contact' style={{textDecoration:"none", color:"var(--background-color)"}} className='mt-2 connect d-inline-block'>Let's Connect <span><i
                                 className="fa-solid fa-circle-arrow-right connect-icon ml-1" style={{color:"var(--background-color)",fontSize:"20px"}}></i></span></a>
                         </div>

                     </div>
                     <div className="col-md-6 d-flex justify-content-center bannerImg">
                         <img src={img1} alt="banner" className="w-75"/>
                     </div>
                 </div>
             </div>
            </section>
        </React.Fragment>
    )
}

export default Home;