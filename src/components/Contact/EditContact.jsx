import React, { Component } from 'react'
import { Consumer } from '../../components/Context'
// import uuid from 'uuid'
import TextInputGroup from '../../components/Contact/Form/TextInputGroup'
import Aux from '../../Auxllary'
import axios from 'axios'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {
            name: '',
            phone: '',
            email: ''
        }
    }
    async componentDidMount(){
        const { id } = this.props.match.params
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value })

    onSubmit = async (dispatch, e) => {
        e.preventDefault()

        //Destructring Data from state
        const { name, email, phone } = this.state

        //CHECK FOR ERROR
        if (name === '') {
            this.setState({ error: { name: 'Name is required' } })
            return
        }
        if (email === '') {
            this.setState({ error: { email: 'Phone is required' } })
            return
        }
        if (phone === '') {
            this.setState({ error: { phone: 'Email is required' } })
            return
        }

        //After Adding Contact State Should Be Clear
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        })
        this.props.history.push('/')
        
        //PUTING ALL NEW DATA TO OUR DATABASE
        const updContact = {
            name,
            email,
            phone
        }
        const { id } = this.props.match.params
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
        dispatch({type: 'UPDATE_CONTACT', payload: res.data})

    }

    render() {

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    const { name, phone, email, error } = this.state
                    return (
                        <Aux>
                            <h1 className='display-4'>Edit<span className='text-success'> Contact</span></h1>
                            <div className='card mb-3'>
                                <div className='card-header'>Add Contact</div>
                                <div className='card-body'>
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup
                                            label='Name'
                                            name='name'
                                            placeholder='Enter Name'
                                            value={name}
                                            type={name}
                                            onChange={this.onChange}
                                            error={error.name}
                                        />
                                        <TextInputGroup
                                            label='Email'
                                            name='email'
                                            placeholder='Enter Email'
                                            value={email}
                                            type={email}
                                            onChange={this.onChange}
                                            error={error.email}
                                        />
                                        <TextInputGroup
                                            label='Phone'
                                            name='phone'
                                            placeholder='Enter Email'
                                            value={phone}
                                            type={phone}
                                            onChange={this.onChange}
                                            error={error.phone}
                                        />
                                        <input type="submit" value="Update Contact" className='btn btn-block btn-success' />
                                    </form>
                                </div>
                            </div>
                        </Aux>
                    )
                }}
            </Consumer>
        )
    }
}
export default EditContact