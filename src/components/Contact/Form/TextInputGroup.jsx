import React from 'react'
import classname from 'classname'
import PropTypes from 'prop-types'


const textinputgroup = (props) => {
    const { label, name, value, placeholder, type, onChange, error} = props
    return(
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                name={name}
                className={classname('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
textinputgroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default textinputgroup