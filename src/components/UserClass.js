import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state={
            count:0,
            count2:1,

        };
        console.log(this.props.name + 'Child Constructor');

    }
    

    componentDidMount(){
        console.log(this.props.name + 'Child Component Did Mount');


        //Api calls 

    }
    

    render(){
        console.log(this.props.name + 'Child render');
        


        const {name,Location}=this.props;
        const {count,count2}=this.state;


        return (
            <div className="user-card">
                <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1>
                <button onClick={()=>{
                    //Never directly update you state variables like this.state.count=this.state.count+1
                    this.setState({
                        count:count+1,
                        count2:count2+1
                    })
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h3>Location:{Location}</h3>
                <h3>Contact:@anuj846k</h3>
        
            </div>
          )
    }
}

export default UserClass;