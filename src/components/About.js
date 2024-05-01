import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called")
    }


    componentDidMount(){
        console.log("Parent componentDidMount called");
    }
    render(){
        console.log("Parent render called")
        return( 
            <div>
                <h1>About</h1>
                <h2>This is about page</h2>
                <UserClass name={"First "} Location={"Delhi ncr"}/>
                <UserClass name={"Second"} Location={"metaverse"}/>

            </div>
        );

    }

}


/*
-Parent constructor 
-Parent render
    -Anuj constructor
    -Anuj render
    -Anuj componentDidMount
    
    




*/

export default About;