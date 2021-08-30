import React from "react";

class NotesPage extends React.Component {
  state = {
    note: {
      title: "",
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const note = { ...this.state.note, title: event.target.value };
    this.setState({ note });
  }

  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(`You are epic. Here is your title ${this.state.note.title}`)
  }

  render(): JSX.Element {
    const flavor = `Create a memorable title.`;

    return (
      <div>
        <h2 className="center">
          Notes
        </h2>
        <div className="container row">
          <form className="col s12 row" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <div className="col s5 offset-s3">
                <i className="material-icons prefix">note_add</i>
                <input
                  onChange={this.handleChange}
                  value={this.state.note.title}
                  placeholder={flavor}
                  id="first_name"
                  type="text"
                  className="validate"
                />

                <label htmlFor="first_name">Title</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">save</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NotesPage;