import React, { Component } from 'react'
import Main from '../template/Main'
import URLS from '../../assets/js/url-api'
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

    // componentWillMount gets dbjson list
    componentWillMount() {
        axios(URLS).then(res => {
            this.setState({ list: res.data })
        })
    }

    clear() {
        // Because I only need to clear user
        this.setState({ user: initialState.user })
    }

    save() {
        // clone Obj user
        const user = this.state.user
        // if user.id present => 'put' else => 'post'
        // if it has userId => PUT else POST
        const method = user.id ? 'put' : 'post'
        // if user.id present => URL/user.id else URL
        const url = user.id ? `${URLS}/${user.id}` : URLS
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
                                required="required" />
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
                                required="required" />
                        </div>
                    </div>
                    {/* form e-mail */}

                    
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
                <hr/>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${URLS}/${user.id}`).then(res => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table table-striped mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    // to render lines
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key="user.id d-flex align-items-baseline">
                    <th scope="row">{user.id}</th>
                    <td scope="col">{user.name}</td>
                    <td scope="col">{user.email}</td>
                    <td scope="col">
                        <button onClick={() => this.load(user)} className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button onClick={() => this.remove(user)} className="btn btn-danger ml-2">
                            <i className="fa fa-trash center"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                { this.renderForm() }
                { this.renderTable() }
            </Main>
        )
    }

}