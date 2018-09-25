import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import '../../App.css'
import { Consumer } from './../Context'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Contact extends Component {
    state = {
        status: false
    }
    toggleBarHandler = (event) => {
        const doseShow = this.state.status
        this.setState({ status: !doseShow })
    }

    onDeleteClickHandler = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({ type: 'DELETE_CONTACT', payload: id })
        } catch (err) {
            dispatch({ type: 'DELETE_CONTACT', payload: id })
        }
    }

  render() {
      const { id, name, email, phone } = this.props.contact
      const editBtn = {
          cursor: 'pointer',
          float: 'right',
          color: 'green'
      }
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return(
                        <div className='card card-body mb-3'>
                            <h4>{name}
                                <i onClick={(event) => this.toggleBarHandler(event)}
                                    className='fas fa-angle-double-right'
                                    style={{ pointerEvents: 'stroke' }} />

                                <i className='fas fa-times'
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={() => this.onDeleteClickHandler(id, dispatch)}
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i className='fas fa-pencil-alt' style={editBtn}></i>
                                </Link>
                            </h4>

                            {this.state.status ? <ul className='list-group'>
                                <li className='list-group-item'>Phone: {phone}</li>
                                <li className='list-group-item'>Email: {email}</li>
                            </ul> : null}
                        </div>
                    )
                }}
            </Consumer>
        )
  }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact