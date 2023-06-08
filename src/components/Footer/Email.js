import React, {useState} from "react";
import './Footer.css';



function Email() {

    const [email,setEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setEmail('');
    };


    return (
        <>
            <div className='container p-5  email-container'>
                <div className='row d-flex align-items-center justify-content-between'>
                    <div className='col-md-6 email-title'>
                        <h5 className='text-white m-0'>See My Projects at Once & Leave Here Your Email Address.</h5>
                    </div>
                    <div className='col-md-6'>
                        <form className="form-inline"  onSubmit={sendEmail}>
                            <div className="form-group col-md-12">
                                <input type="email" className="w-100 emailInput" name='email'
                                       placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <button type="submit" className="btn mb-2 emailSubmit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Email;