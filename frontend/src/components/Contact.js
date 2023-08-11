import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="contact_info container">
                <div className="container_fluid">
                    <div className="row">
                        <div className="p-0 d-flex justify-content-between">
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <i className="zmdi zmdi-phone-in-talk"></i>
                                <div className="contact_info_content ">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 1234567890
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <i className="zmdi zmdi-phone-in-talk"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        <p>email@email.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <i className="zmdi zmdi-phone-in-talk"></i>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 1234567890
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            
            
<section className="mb-4 mt-5 p-5 container">

    
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row row justify-content-center">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>
                    

                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Mobile Number</label>
                        </div>
                    </div>
                </div>
               
                <div className="row">

                   
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div className="text-center text-md-left">
                <button className="btn btn-lg btn-primary">Send</button>
            </div>
            <div className="status"></div>
        </div>

    </div>

</section>




        </>
    )
}
export default Contact