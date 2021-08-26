import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  handleTaskDescriptionChange = (e) => {
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    console.log(this.state.stask);
  };

  render() {
    console.log(this.state.task);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input
              onChange={this.handleTaskDescriptionChange.bind(this)}
              type="text"
              name="name"
            />
          </label>
          <button className="bouton" type="submit" value="Envoyer">
            Ajouter à ma liste
          </button>
        </form>
      </>
    );
  }
}

export default Form;
