import React from 'react'
import './Home.css'

import Main from '../template/Main'

export default props =>
    <Main icon="home" title="start" subtitle="2nd Project of React Studies">
        <div className="display-4">Welcome!</div>
        <hr/>
        <p className="mb-0">The porpuse of this system is to exemplify
            a register developed using React.
        </p>
    </Main>