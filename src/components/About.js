import UserContext from "../utils/UserContext";
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
            <div className="m-10 p-16 rounded-md border-2 border-black w-1/2 ">
                <h1>About</h1>
                <div className="flex">
                    LoggedInUser: 
                    <UserContext.Consumer>
                        {({loggedInUser})=>(
                                <h1 className="font-bold text-xl ml-1"> {loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is about page</h2>
                <UserClass name={"First"} Location={"Delhi ncr"}/>
                <UserClass name={"Second "} Location={"Delhi ncr"}/>

            </div>
        );

    }

}


export default About;