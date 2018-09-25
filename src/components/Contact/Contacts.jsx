import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import Aux from '../../Auxllary'
import { Consumer } from '../../components/Context'

class Contacts extends Component {


  render() {
      return (
          <Consumer>
              {value => {
                  const { contacts } = value
                  return (
                      <Aux>
                          <h2 className='display-4 mb-2'><span className='text-success'>Contact</span> List</h2>
                          {contacts.map(contact => <Contact contact={contact}
                              key={contact.id}
                          />)}
                      </Aux>
                  )
              }}
          </Consumer>
      )
  }
}

export default Contacts