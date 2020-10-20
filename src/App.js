import React, { Component } from "react";
import Cards from "./components/Card";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = { user: {}, followers: [] };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/AragonRyoma")
      .then((res) => {
        this.setState({
          user: { ...res.data },
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/AragonRyoma/followers")
      .then((res) => {
        this.setState({
          followers: [...res.data],
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Github Info</h1>

        <Cards data={this.state.user} />
        {this.state.followers.map((follower) => (
          <Cards data={follower} />
        ))}
      </div>
    );
  }
}
