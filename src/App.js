import React, { Component } from "react";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    fullName: "Rihem Ben Ahmed",
    bio: "bac sciences exp, licence en administration des réseaux et services, Ingenieurie en dévelepement des infrastructures de communications",
    imgSrc: "femme.png",
    profession: "Etudiante",
    show: false,
    count:0
  };
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>The component has been rendered for {this.state.count} seconds</h1>
        <button onClick={this.handleShow}>Show Profile</button>
        {this.state.show ? (
          <Profile
            fullName={this.state.fullName}
            bio={this.state.bio}
            profession={this.state.profession}
          >
            <img src={this.state.imgSrc} alt="profile" />
          </Profile>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}
