import React from "react";

const Footer = () =>
{
    return (
    
    <footer>
       {/*  <!-- Widgets Start --> */}
        <div className="footer-widgets">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-xl-3">
                        <div className="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                            
                            <div className="media">
                                <i className="fa fa-envelope-o"></i>
                                <div className="media-body ml-3">
                                    <h6>Email</h6>
                                    <a>fipp@fipp.unoeste.br</a>
                                </div>
                            </div>
                             <div className="media">
                                <i className="fa fa-phone"></i>
                                <div className="media-body ml-3">
                                    <h6>Telefone</h6>
                                    <a> (18) 3229-1060</a>
                                </div>
                            </div> 
                            
                        </div>
                    </div>
                
                </div>
            </div>
        </div>          
        <hr/>   
        {/* <!-- Widgets End -->
        <!-- Foot Note Start --> */}

         <div className="foot-note">
            <div className="container">
                <div
                    className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
                    <p style={{color: "rgb(0, 0, 0)"}} className="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; FIPP-2022</p>
                    
                </div>
            </div>
        </div> 

       {/*  <!-- Foot Note End --> */}
    </footer>
    
     
    )
};export default Footer

