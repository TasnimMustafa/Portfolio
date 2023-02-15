import React, {useEffect} from "react";
import './Skills.css';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import SvgProgress from "./SvgProgress";


function Skills() {


    const slides= [
        {
            skill:"HTML",
            percentage:"95"

        },
        {
            skill:"CSS",
            percentage:"92"
        },
        {
            skill:"HTML5",
            percentage:"90"
        },
        {
            skill:"CSS3",
            percentage:"90"
        },
        {
            skill:"JavaScript",
            percentage:"85"
        },
        {
            skill:"Reactjs",
            percentage:"80"
        },
        {
            skill:"PHP",
            percentage:"79"
        },
        {
            skill:"Laravel",
            percentage:"89"
        },
        {
            skill:"MySQL",
            percentage:"88"
        },
    ];





    return (
        <>
            <section id="skills" className="skills">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                      <div className="col-8 skills-container">
                          <div className='mb-5'>
                        <h2>Skills</h2>
                          <p>You Can See My Skills Here</p>
                          </div>

                          <div>


                              <Swiper
                                  className='d-flex'
                                  breakpoints={{
                                      // when window width is >= 640px
                                      320: {
                                          width: 320,
                                          slidesPerView: 2,
                                          justifyContent:"center",
                                          marginRight:0,
                                      },
                                      // when window width is >= 768px
                                      768: {
                                          width: 768,
                                          slidesPerView: 3,
                                      },
                                  }}
                                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                                  spaceBetween={25}
                                  slidesPerView={3}
                                  navigation={true}
                                  pagination={{ clickable: true }}
                                  // onSlideChange={() => console.log('slide change')}
                                  // onSwiper={(swiper) => console.log(swiper)}
                              >
                                  {slides.map((slide) => (
                                      <SwiperSlide key={slide.skill}>

                                          <SvgProgress size={150} strokeWidth={20} percentage={slide.percentage}/>
                                          <h4 className='my-5'>{slide.skill}</h4>


                                      </SwiperSlide>
                                  ))}
                              </Swiper>

                          </div>

                      </div>


                    </div>
                </div>
            </section>



        </>
    )
}

export default Skills;