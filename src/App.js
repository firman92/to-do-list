import React from "react";
import Form from "./Components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    console.log(task);
  };

  render() {
    return (
      <>
        <h1>To do list</h1>
        <Form addTask={this.addTask} />;
      </>
    );
  }
}

export default App;
