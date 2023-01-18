
import React from 'react'
import { Link } from 'react-router-dom'

const DeadZone = () => {
    return (
        <div>
            <h4>Oh! you've entered into the dead zone</h4>

            <Link to={'/'}>Go home</Link>
        </div>
    )
}

export default DeadZone