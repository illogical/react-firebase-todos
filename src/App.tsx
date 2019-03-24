import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <TodoList />
        </Container>
      </div>
    );
  }
}

export default App;
