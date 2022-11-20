import React from 'react';
/*  import '../assets/css/loader/loaders.css'; */
import Logo from '../assets/images/logo.png';



const HeaderP = () =>
{
    return(
        <>             
    <div className="css-loader">
        <div className="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
    </div>
    {/* 
    <!-- Loader End -->
    <!-- Header Start --> */}
    <header className="position-absolute w-100">
        <div className="container">
            <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div className="contact">
                    <a href="" className="tel"><i className="fa fa-phone" aria-hidden="true"></i>telefone aqui</a>
                    <a href=""><i className="fa fa-envelope"
                            aria-hidden="true"></i></a>
                </div>
                <nav className="d-flex aic">
                    <a href="Login.html" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</a>
                </nav>
            </div>
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.js"><img src={Logo} alt="Multipurpose"/></a>                 
                <div className="group d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon">
                                </span></button>
                    <a className="login-icon d-sm-none" href="#"><i className="fa fa-user"></i></a>
                    <a className="cart" href="#"><i className="fa fa-shopping-cart"></i></a>
                </div>
                <a className="search-icon d-none d-md-block" href="#"><i className="fa fa-search"></i></a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">""</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">""</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">""</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">""</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">""</a></li>
                    </ul>
                    <form className="bg-white search-form" method="get" id="searchform">
                        <div className="input-group">
                            <input type="text"
                            className="field form-control"
                    /* value={stateItem.tarefa}
                    onChange={(event) => { setStateItem({ ...stateItem, tarefa: event.target.value, msg: "" }) }} */
                />
                             <span className="input-group-btn">
                                <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit"
                                    value="Search"/>
                            </span> 
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header>

        </>
    )
   
} ;export default HeaderP