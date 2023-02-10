import React from "react";
import PropsComp from "./PropsComp";

const sampleData = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

const SampleComp = () => {
    return(
        <>
           <PropsComp date={sampleData.date} text={sampleData.text} author={sampleData.author}></PropsComp>
        </>
    )
}

export default SampleComp;