import React from 'react'
import './Main.css'
import Header from './Header'

export default props => 
    // I don't need my components wrapped in a div element. So, I use React.Fragment
    <React.Fragment>
        {/* the properties of main */}
        <Header {...props}/>
        <main className="content container-fluid">
            <section className="p-3 mt-3">
                {props.children}
            </section>
        </main>
    </React.Fragment>
    