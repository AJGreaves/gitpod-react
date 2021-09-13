import React from 'react'

const UserData = (props) => {
    return (
        <div>
            <h2>{props.isLoaded ? 'Data loaded!' : 'Loading...'}</h2>
        </div>
    )
}

export default UserData
