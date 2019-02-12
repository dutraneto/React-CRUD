import React from 'react'
// using routes
import { Switch, Route, Redirect } from 'react'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// What a ugly sintax
//  Switch for mapping routes
export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from="*" to='/' />
    </Switch>