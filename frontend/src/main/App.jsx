import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import NavItem from '../components/template/NavItem'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props => 
    <div className="app">
        <Logo />
        <Nav icon="home" info="info" contact="envelope-o" blog="globe" careers="star-o" users="users"/>
        <Main icon="home" title="start" subtitle="2nd Project of React Studies">
            <div className="display-4">Welcome!</div>
            <hr/>
            <p className="mb-0">The porpuse of this system is to exemplify
                a register developed using React.
            </p>
        </Main>
        <Footer />
    </div>
