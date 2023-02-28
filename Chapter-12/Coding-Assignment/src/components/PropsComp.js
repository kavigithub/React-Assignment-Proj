import React from "react";
import AvatarDetails from "./AvatarDetails";

function formatDate(date) {
    return date.toLocaleDateString();
  }

const PropsComp = (props) => {
    return(
        <>
            <div className="list-user">
                {console.log(props)}
                <AvatarDetails user={props.author}/>
               <p>{props.text}</p>
               <p>{formatDate(props.date)}</p>
            </div>
        </>
    ) 
}

export default PropsComp
