import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    constructor(props) {
        super(props)

        this.nameInput = React.createRef()
        this.phoneInput = React.createRef()
        this.emailInput = React.createRef()
    }

    onSubmit = (e) => {
        e.preventDefault()
        const contact = {
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
            email: this.emailInput.current.value
        }
        console.log(contact)
    }

    static defaultProps = {
        name: 'Forhad Hossen',
        email: 'forhadbabu@gmail.com',
        phone: '555-5555-555'
    }

    render() {
        const { name, email, phone } = this.props
        return (
            <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name </label>
                            <input type="text"
                                name='name'
                                className='form-control form-control-lg'
                                placeholder='Enter Name...'
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='name'>Phone </label>
                            <input type="phone"
                                name='phone'
                                className='form-control form-control-lg'
                                placeholder='Enter Number...'
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='name'>Email </label>
                            <input type="email"
                                name='email'
                                className='form-control form-control-lg'
                                placeholder='Enter Email...'
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <input type="submit" value="Add Contact" className='btn btn-block btn-light' />
                    </form>
                </div>
            </div>
        )
    }
}
export default AddContact