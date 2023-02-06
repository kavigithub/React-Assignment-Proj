import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";
import React from "react";


/* const About = () => {
    return(
        <>
            <h2>
                Discover The Swiggster In You
            </h2>
            <section className="img-txt">
                <img src="https://careers.swiggy.com/assets/img/inverted-commas.png"/>
                <h3>
                Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."  
                </h3>
            </section>

            <ProfileClass name={'KavitaClassy'} xyz="abc"/>
            <ProfileFunction name={"Kavita"} />
        </>
    )
} */


class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount(){
        //console.log('API Call')
        console.log('Parent componentDidMount');
    }

    render(){
        return(
            <>
                {console.log('Parent render')}
                <h2>
                    Discover The Swiggster In You
                </h2>
                <section className="img-txt">
                    <img src="https://careers.swiggy.com/assets/img/inverted-commas.png"/>
                    <h3>
                    Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."  
                    </h3>
                </section>
    
                <ProfileClass name={'KavitaClassy'} xyz="abc"/>
                <ProfileFunction name={"Kavita"} />
            </>
        )
    }

}

export default About;