import React from 'react';

function EventsFunctional() {
    const clickHandler = () =>  console.log("Clicked functional component");
    return (
        <div>
            <button onClick={clickHandler}>click me - functional component</button>
        </div>
    )
}

export default EventsFunctional