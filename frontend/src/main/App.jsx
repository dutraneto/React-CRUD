import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props => 
    // I can use both HashRouter or BrowserRouter
    <BrowserRouter> 

        <div className="app">
            <Logo />
            <Nav icon="home" info="info" contact="envelope-o" blog="globe" careers="star-o" users="users"/>
            {/* <Home /> Changed by Routes */}
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
