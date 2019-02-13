import React, { Component } from 'react'
import Main from '../template/Main'
import URL from '../../assets/js/const'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Include, List, Change and Delete'
}

const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        // Because I only need to clear user
        this.setState({ user: initialState.user })
    }

    save() {
        // clone Obj user
        const user = this.state.user
        // if user.id present => 'put' else => 'post'
        const method = user.id ? 'user' : 'post'
        // if user.id present => URL/user.id else URL
        const url = user.id ? `${URL}/${user.id}` : URL
        // axios[method] is not dot notation method is not a methos it is a string
        axios[method](url, user)
            .then(res => {
                const list = this.getUpdatedList(res.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        // clone user state
        const user = { ...this.state.user }
        // input field that changes current value for another
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Here goes our form with bootstrap
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="email" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Type a name..."
                                required />
                        </div>
                    </div>
                    {/* form name */}

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Type a valid e-mail..."
                                required />
                        </div>
                    </div>
                    {/* form e-mail */}

                    <hr/>
                </div>
                {/* buttons */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Save
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                { this.renderForm() }
            </Main>
        )
    }

}