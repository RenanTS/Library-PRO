import React, { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Biblioteca from '../assets/images/Biblioteca.jpg';
import post1 from '../assets/images/post1.jpg';
import post2 from '../assets/images/post2.jpg';
import post3 from '../assets/images/post3.jpg';
import post4 from '../assets/images/post4.jpg';
const Secao = () =>
{
    useEffect(() => {
        Aos.init({duration:2000});
        
    },[]);
    return (
    <>
        
        <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="swiper-container hero-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide-content d-flex align-items-center">
                            <div className="single-slide">
                                
                            <h1 data-aos="fade-right" data-aos-delay="200" >
                                Library-PRO<br/> A biblioteca fisica, agora também virtual!!
                            </h1>
                                     <p data-aos="fade-right" data-aos-delay="200" >Possibilidade de consultar o arcevo sem sair de casa,
                                         e fazer a reserva muito mais facil sem se preocupar!
                                        
                                    </p> 

                                    {/* <!-- <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See
                                        ""</a> --> */}
                                    
                                </div>
                            </div>
                            {/* <!-- <div className="swiper-slide slide-content d-flex align-items-center">
                                <div className="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">!!<br/> !!
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">!!
                                        !!<br> !!
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">See
                                        More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" className="btn btn-primary">Get
                                        Now</a>
                                </div>
                            </div> --> */}
                        </div>

                    </div>
                </div>
            </div>
          {/*   <!-- Add Control --> */}
            <span className="arr-left"><i className="fa fa-angle-left"></i></span>
            <span className="arr-right"><i className="fa fa-angle-right"></i></span>
        </div>
        <div className="texture"></div>
        <div className="diag-bg"></div>
    </section>
    <section class="featured">
        <div class="container">
            <div class="row">
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                    <div class="title">
                        <h6 class="title-primary">Ambiente Aconchegante</h6>
                        <h1 class="title-blue">Salas de estudo em grupo!</h1>
                    </div>
                    
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                    <div class="featured-img">
                        <img class="img-fluid" src={Biblioteca} alt="Featured 1"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
<section className="cta" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
            <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
                <div className="content" /* data-aos="fade-right" */ data-aos-delay="200">
                    <h2>Livros em todos os estilos! </h2>
                    <p>Além de artigos cientifico e jornais.</p>
                </div>
                <div className="subscribe-btn" /* data-aos="fade-left" */ data-aos-delay="400" data-aos-offset="0">
                    <p className="btn btn-primary">Venha Conferir!!</p>
                </div>
            </div>
        </div>

    </section>
     <hr/> 
    <section className="recent-posts">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                    <div className="single-rpost d-sm-flex align-items-center" data-aos="fade-right"
                        data-aos-duration="800">
                        <div style={{color: "rgb(6, 6, 81)"}} className="post-content text-sm-right">
                            <h3 style={{color:"rgb(49, 49, 61)"}} href="#">"A leitura engrandece a alma."</h3>
                            <p >Voltaire</p>    
                        </div>
                        <div class="post-thumb">
                            <img class="img-fluid" src={post1} alt="Post 1"/>
                        </div> 
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-duration="800">
                        <div class="post-thumb">
                            <img class="img-fluid" src={post2} alt="Post 1"/>
                        </div>
                        <div class="post-content">
                            <h3 style={{color: "rgb(6, 6, 81)"}} href="#">"Leitura, antes de mais nada é estímulo, é exemplo."</h3>
                            <p style={{color: "rgb(49, 49, 61)"}}>Ruth Rocha</p>
                         </div>
                    </div>
                </div> 
                 <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-right" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-content text-sm-right">
                            <h3 style={{color: "rgb(6, 6, 81)"}} href="#">"A paixão da leitura é a mais inocente, aprazível e a menos dispendiosa."</h3>
                            <p style={{color: "rgb(49,49,61)"}} >Marquês de Maricá</p>
                        </div>
                        <div class="post-thumb">
                            <img class="img-fluid" src={post3} alt="Post 1"/>
                        </div>
                    </div>
                </div> 
                 <div class="col-lg-6">
                    <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-delay="200"
                        data-aos-duration="800">
                        <div class="post-thumb">
                            <img class="img-fluid" src={post4} alt="Post 1"/>
                        </div>
                        <div class="post-content">
                            <h3 style={{color: "rgb(6, 6, 81)"}} href="#">"Creio que uma forma de felicidade é a leitura."</h3>
                            <p style={{color: "rgb(49,49,61)"}} >Jorge Luis Borges</p>
                        </div>
                    </div>
                        </div> 
            </div>  
        </div>
     </section>
    <hr/> 
    <section class="pricing-table">
        <div class="container">
            <div class="title text-center">   
                <h1 class="title-blue">Plano de Mensalidade</h1>
            </div>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="300"
                        data-aos-duration="600">
                        <p class="price">$39.00</p>
                        <p>Serviço de Impreção e Xerox</p> 
                        <p>Uso dos computadores</p>
                        <a href="#" class="btn btn-primary">Contratar</a>
                        <svg viewBox="0 0 170 193">
                            <path fill-rule="evenodd" fill="rgb(238, 21, 21)"
                                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr/>

    </>
    )
};export default Secao