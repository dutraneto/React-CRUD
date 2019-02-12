import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Include, List, Change and Delete'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Users Register
            </Main>
        )
    }

}