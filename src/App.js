import React from "react";

import HeaderP from './Principal/HeaderP.js';
import Secao from './Principal/Secao.js';
import Footer from "./Principal/Footer.js";

import './assets/css/font-awesome/font-awesome.css';
import './assets/css/bootstrap.css';
import './assets/css/swiper/swiper.css';
import './assets/css/lightgallery.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css'; 




    

/* import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
 */

export default function App() {
    
    
    let saida = 
        <>            
            <HeaderP/>
            <Secao/> 
            <Footer/>
            
    </>
    return saida;
} 