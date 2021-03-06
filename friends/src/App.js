import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchFriends, createFriends } from "./actions/fetchFriends";
import { connect } from "react-redux";
import Friends from "./components/Friends";
import CreateFriendsForm from "./components/CreateFriendsForm";

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  componentDidMount() {
    this.props.fetchFriends();
  }
  handleNewFriend = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CreateFriendsForm
          createFriends={this.props.createFriends}
          handleNewFriend={this.handleNewFriend}
          friend={this.state}
        />
        <Friends friendsList={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, {
  fetchFriends,
  createFriends
})(App);
