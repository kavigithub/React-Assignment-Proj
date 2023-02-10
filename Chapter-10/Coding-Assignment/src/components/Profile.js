import React from "react";
import { useState, useEffect } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        console.log('some api call');

       const timer2 = setInterval(() => {
            console.log('Call me after 2 seconds');
        }, 2000);

        return() => {
            clearInterval(timer2);
            console.log('return call to clear 2 seconds')
        }
    })

    //console.log('first render')

    return(
        <>
            <div className="funcComp-box">
                <h2>Profile Function Component</h2>
                <p>This is functional components</p>
                <p>{props.name}</p>
                <p>Function Count : {count}</p>
                <p>Function Count : {count2}</p>
                <button onClick={() => setCount(count + 1)}>Count</button>
                <button onClick={() => setCount2(count2 + 1)}>Button 2</button>
            </div>
        </>
    )
}

export default Profile;