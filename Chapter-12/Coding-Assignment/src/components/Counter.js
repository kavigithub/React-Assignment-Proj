import React from "react";
import { useState, useEffect } from "react";

/*  const setCount = (val) => {
    console.log(val);
        return val++;
        
         } */

function Counter(){
    console.log(useState(null));
    const[incrementCount, setIncrementCount] = useState(0);
    console.log(incrementCount);

 /*    
 let count = 0;
 const setCount = () => {
        count++;
        console.log(count);
         } */
   return(
    <>
        <div>
         {/*    <label>{count}</label>
            <hr />
            <label>Counter</label>
            <button onClick={setCount}>{count}</button> */}

            <label>{incrementCount}</label>
            <hr />
            <label>Counter</label>
            <button onClick={() => {
                setIncrementCount(incrementCount + 1)
            }}>{incrementCount}</button>

        </div>

        <div><User name='Kavita'/></div>
        <div><Timer></Timer></div>
    </>
   )
}

function User({name}) {
   // return <h1>{props.name}</h1> this is for props example
   //document.title = name  (check diary [13 Sep])

   
    useEffect(() => {
        document.title = name //binteract with browser API : document or window
    }, [name])

   return <h1>{name}</h1>
}

function Timer(){
    const[time, setTime] = useState(0);

    useEffect(()=> {
        let interval = setInterval(() => {setTime(2)}, 1000);

        return(() => {
            clearInterval(interval)
        })
    }, [])

    return <h2>{time}</h2>
}

export default Counter