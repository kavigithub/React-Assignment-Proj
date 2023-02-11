import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        //create state over here
        this.state = {
            count : 0,
            count2: 1,
            userInfo: {
                name: 'ABC',
                location: 'Thane'
            } 
        }
        console.log('child : 1st constructor called');
    }

    async componentDidMount(){
        //this is the function called after render for API
        //console.log('child : 3rd component did mount is called');

        let callApi = await fetch('https://api.github.com/users/kavigithub');
        let getData = await callApi.json();
        console.log(getData)

        this.setState({
            userInfo: getData
        })

        console.log('child : 3rd component did mount is called');

        this.timer = setInterval(() => {
            console.log('Call me once after 1 seconds')
        }, 1000)
    }

    componentDidUpdate(){
        console.log('component did update call when state update whenever there is change or update in state ')
    }

    componentWillUnmount(){
        console.log('component will un mount');
        clearInterval(this.timer);
    }

    render(){
        console.log('child: 2nd component render')
        const {count, count2} = this.state;
        return (
            <div className="classComp-box">
               <h2>Profile Class Component</h2>
               <p>This is class component</p> 
               <p>Name: {this.props.name}</p>
               <p>xyz : {this.props.xyz}</p>
               <p>Class Count: {count}</p>
               <p>Class Count: {count2}</p>
               <button onClick={() => {
                //WE DON"T MUTATE STATE Directly
                //nerver do this.state: something
                this.setState({
                    count: 1,
                    count2: 2
                })
               }}>Count</button>

               <div>
                <h4>USER Details</h4>
                <img src={this.state.userInfo.avatar_url}/>
                <h3>{this.state.userInfo.name}</h3>
                <h5>{this.state.userInfo.location}</h5>
               </div>
            </div>
        )
    }
}

export default ProfileClass