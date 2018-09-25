import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'


const Header = (props) => {
    const {branding} = props
    return(
        <nav className='navbar navbar-expand-sm navbar-dark mb-3 py-0 bg-success'>
            <div className="container">
                <a className='navbar-brand'><img style={{ maxWidth: '10%'}}src={Logo} alt={branding}/>{branding}</a>
                <div>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'><i className='fas fa-home'/>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact/add' className='nav-link'><i className='fas fa-plus'/>Add</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'><i className='fas fa-question'/>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}


export default Header