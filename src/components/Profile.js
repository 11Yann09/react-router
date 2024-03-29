import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    const data = this.props.match.params.profileId;

    this.setState({
      id: data,
    });
  }

  render() {
    return (
      <div className="container mt-3">
        <h1>Profile</h1>

        <ul className="list-group-flush">
          <li className="list-groupe_item">ID: {this.state.id}</li>
        </ul>
      </div>
    );
  }
}
export default Profile;
