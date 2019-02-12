import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

export default props =>
    <ul className="">
        <li>
            <Link to="/">
                <i className={`fa fa-${props.icon}`}></i> Home
            </Link>
        </li>
        <li>
            <Link to="/users">
                <i className={`fa fa-${props.users}`}></i> Users
            </Link>
        </li>
        <li>
            <Link to="/contact">
                <i className={`fa fa-${props.contact}`}></i> Contact
            </Link>
        </li>
        <li>
            <Link to="/blog">
                <i className={`fa fa-${props.blog}`}></i> Visit out Blog
            </Link>
        </li>
        <li>
            <Link to="/careers">
                <i className={`fa fa-${props.careers}`}></i> Careers
            </Link>
        </li>
        <li>
            <Link to="/info">
                <i className={`fa fa-${props.info}`}></i> Client Testimonials
            </Link>
        </li>
    </ul>