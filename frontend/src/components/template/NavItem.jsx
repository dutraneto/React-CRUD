import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

export default props =>
    <ul className="">
        <li>
            <Link to="/">
                <div className="d-flex"><i className={`fa fa-${props.icon}`}></i> <span>Home</span></div>
            </Link>
        </li>
        <li>
            <Link to="/users">
                <div><i className={`fa fa-${props.users}`}></i> <span>Users</span></div>
            </Link>
        </li>
        <li>
            <Link to="/contact">
                <div><i className={`fa fa-${props.contact}`}></i> <span>Contact</span></div>
            </Link>
        </li>
        <li>
            <Link to="/blog">
                <div><i className={`fa fa-${props.blog}`}></i> <span>Visit out Blog</span></div>
            </Link>
        </li>
        <li>
            <Link to="/careers">
                <div><i className={`fa fa-${props.careers}`}></i> <span>Careers</span></div>
            </Link>
        </li>
        <li>
            <Link to="/info">
                <div><i className={`fa fa-${props.info}`}></i> <span>Client Testimonials</span></div>
            </Link>
        </li>
    </ul>