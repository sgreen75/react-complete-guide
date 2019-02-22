import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Steven", age: 35 },
      { name: "Joey", age: 28 },
      { name: "Taylor", age: 30 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log("Was Clicked!");
    // Don't do this: this.state.persons[0].name = 'Daniel';
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: "Joey", age: 28 },
        { name: "Taylor", age: 29 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Steven", age: 35 },
        { name: event.target.value, age: 28 },
        { name: "Taylor", age: 30 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Daniel!!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Steven!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
