import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor")
    }


    async componentDidMount(){
        // console.log("Parent componentDidMount called");
        //Api calls
        const data=await fetch("https://api.github.com/users/anuj846k");
        const json=await data.json();
        console.log(json);                                                                                                                                                                                                                                                                                                                                                                                              
    }


    render(){
        // console.log("Parent render called")
        return( 
            <div>
                <h1>About</h1>
                <h2>This is about page</h2>
                <UserClass name={"First"} Location={"Delhi ncr"}/>
                <UserClass name={"Second "} Location={"Delhi ncr"}/>

            </div>
        );

    }

}


export default About;