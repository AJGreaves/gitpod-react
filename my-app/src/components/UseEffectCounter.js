import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]); // [count] tells the useEffect method that it should only run when the count value changes

    useEffect(() => {
        console.log("creating timer");
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            // A cleanup function that clears the interval when the display is toggled away.
            // This mimics the compoentWillUnmount() method
            console.log('cleaning up')
            clearInterval(interval);
        }
    }, []);  // Any time you want a useEffect method to run once, you must pass it an empty array.

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter
