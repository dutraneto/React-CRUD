import React from 'react'
import './NavItem.css'

export default props =>
    <ul className="">
        <li>
            <a href="#/">
                <i className={`fa fa-${props.icon}`}></i> Home
            </a>
        </li>
        <li>
            <a href="#/">
                <i className={`fa fa-${props.info}`}></i> About Us
            </a>
        </li>
        <li>
            <a href="#/">
                <i className={`fa fa-${props.contact}`}></i> Contact
            </a>
        </li>
        <li>
            <a href="#/">
                <i className={`fa fa-${props.blog}`}></i> Visit out Blog
            </a>
        </li>
        <li>
            <a href="#/">
                <i className={`fa fa-${props.careers}`}></i> Careers
            </a>
        </li>
        <li>
            <a href="#/">
                <i className={`fa fa-${props.users}`}></i> Client Testimonials
            </a>
        </li>
    </ul>