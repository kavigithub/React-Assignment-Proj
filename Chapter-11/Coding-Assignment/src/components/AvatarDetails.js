import React from "react";

const AvatarDetails = (props) => {
    const {avatarUrl, name} = props.user;
    return(
        <>
            <figure>
                {console.log(props.user)}
                <img src={avatarUrl} alt={name}  width={100} height={100}/>
                <figcaption>{name}</figcaption>
            </figure>
        </>
    )
}

export default AvatarDetails