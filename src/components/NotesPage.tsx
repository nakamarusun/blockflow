import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNote } from "../redux/actions/noteActions";

class NotesPage extends React.Component {
  state = {
    note: {
      title: "",
      content: "",
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const note = { ...this.state.note, title: event.target.value };
    this.setState({ note });
  }

  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.createNote(this.state.note);
  }

  render(): JSX.Element {
    const flavor = `Create a memorable title.`;

    return (
      <div>
        <h2 className="center">
          Notes
        </h2>
        <section id="newNote" className="container row">
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
        </section>
        <section id="notes" className="row container">
          {this.props.notes.map(note => (
            <div key={note.title} className="col s3">
              <div className="card-panel blue">
                {note.title}
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}

NotesPage.propTypes = {
  createNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNote: note => dispatch(createNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);