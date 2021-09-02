import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNote, loadNotes } from "../redux/actions/noteActions";
import { bindActionCreators } from "redux";

class NotesPage extends React.Component {
  state = {
    note: {
      title: "",
      content: "",
    }
  };

  componentDidMount() {
    this.props.actions.loadNotes().catch(err => {
      alert("Error fetching notes " + err)
    });
  }

  handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const note = { ...this.state.note, content: event.target.value };
    this.setState({ note });
  }

  handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const note = { ...this.state.note, title: event.target.value };
    this.setState({ note });
  }

  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.actions.createNote(this.state.note);

    this.setState({note: {content: "", title: ""}});
  }

  render(): JSX.Element {
    const flavor = `Note down anything.`;

    return (
      <div>
        <h2 className="center">
          Notes
        </h2>
        <section id="newNote" className="container row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <i className="material-icons prefix">note_add</i>
                <input
                  id="note-title"
                  type="text"
                  className="validate"
                  onChange={this.handleChangeTitle}
                  value={this.state.note.title}
                />
                <label htmlFor="note-title">Title</label>
              </div>
            </div>
            <div className="input-field row">
              <div className="col s8 offset-s2">
                <i className="material-icons prefix">edit</i>
                <textarea
                  onChange={this.handleChangeContent}
                  value={this.state.note.content}
                  placeholder={flavor}
                  id="note-content"
                  type="text"
                  className="materialize-textarea"
                />
                <label htmlFor="note-content">Content</label>
              </div>
            </div>
            <div className="row">
              <button className="col offset-s8 s2 btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">save</i>
              </button>
            </div>
          </form>
        </section>
        <section id="notes" className="row container">
          {this.props.notes.map(note => (
            <div key={(Math.random()*10000).toPrecision(5)} className="col s3">
              <div className="card blue">
                <div className="card-content">
                  <span className="card-title">{note.title}</span>
                  <p>{note.content}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}

NotesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      createNote,
      loadNotes
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);