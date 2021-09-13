import React from 'react'

function ConditionalRenderingFunctional(props) {
    return (
        <div>
            <h2>{props.connected ? 'Connected' : 'Not Connected'}</h2>
        </div>
    )
}

export default ConditionalRenderingFunctional
