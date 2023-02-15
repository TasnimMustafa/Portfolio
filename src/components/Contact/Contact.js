import React, {useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import SvgContact from "./Svg-Contact";
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init();
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xlq2xwc', 'template_l6g7kaa', form.current, 'NLB3aije9yfpOvpKB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

   return (
       <>
           <section className='my-5 contact' id='contact'>
               <div className='container'>
                   <div className='row justify-content-between'>
                       <div className='col-md-4 svgC' data-aos="zoom-in-up">
                           <SvgContact className="w-100"/>
                       </div>
                       <div className='col-md-7'>
                           <h2 className='text-white mb-4'>Get In Touch</h2>
                           <form ref={form} onSubmit={sendEmail}>
                               <div className="form-row">
                                   <div className="col-md-6 mb-3">
                                       <input type="text" className="form-control py-4"
                                              placeholder="First Name" name='firstname' required/>
                                   </div>
                                   <div className="col-md-6 mb-3">
                                       <input type="text" className="form-control py-4"
                                              placeholder="Last Name" name='lastname' required/>
                                   </div>
                                   <div className="col-md-6 mb-3">
                                       <div className="input-group">
                                           <input type="email" className="form-control py-4"
                                                 placeholder="Email" name='email' required/>
                                       </div>
                                   </div>
                                   <div className="col-md-6 mb-3">
                                       <div className="input-group">
                                           <input type="number" className="form-control py-4"
                                                  placeholder="Phone No." name='phone' required/>
                                       </div>
                                   </div>
                                   <div className="col-md-12 mb-3">
                                       <div className="input-group">
                                           <textarea cols='30' rows='5' className="form-control py-2"
                                                  placeholder="Message." name='message' required/>
                                       </div>
                                   </div>
                               </div>

                               <button className="btn px-5 py-2 send" type="submit">Send</button>
                           </form>
                       </div>
                   </div>
               </div>
           </section>
       </>
   )
}

export default Contact;