import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
        userInfo:{
            name:"anuj",
            location:"Deafault Location"
        },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    //Api calls
  }

  render() {
    // console.log(this.props.name + "Child render");

    const { name, Location } = this.props;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{Location}</h3>
        <h3>Contact:@anuj846k</h3>
      </div>
    );
  }
}

export default UserClass;
