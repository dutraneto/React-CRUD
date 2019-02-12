import React from 'react'
import './Main.css'
import Header from './Header'

export default props => 
    // I don't need my components wrapped in a div element. So, I use React.Fragment
    <React.Fragment>
        {/* the properties of main */}
        <Header {...props}/>
        <main className="content">
            Main
        </main>
    </React.Fragment>
    