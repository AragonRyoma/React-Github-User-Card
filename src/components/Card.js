import React, { Component } from "react";
import { Card } from "reactstrap";
import "./Card.css";
import GitHubCalendar from "react-github-calendar";

export default class Cards extends Component {
  render(props) {
    return (
      <div>
        <Card style={{ margin: "auto", width: "50%" }}>
          <div className="cardDiv">
            <div className="cardDiv2">
              <p>Username:{this.props.data.login}</p>
              <p>Company:{this.props.data.company}</p>
              <p>Followers:{this.props.data.followers}</p>
            </div>
            <img
              className="imgDiv"
              src={this.props.data.avatar_url}
              style={{ width: "45%", borderRadius: "50%", margin: "auto" }}
            />
          </div>
          <GitHubCalendar username={this.props.data.login} />
        </Card>
      </div>
    );
  }
}
