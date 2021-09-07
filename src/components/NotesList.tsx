import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotesList: JSX.Element = ({ notes }) => (
  <section id="notes" className="row container">
    {notes.map(note => (
      <Link style={{color: "black"}} to={"/notes/" + note.id} key={(note.id)}>
        <div className="col s3">
          <div className="card blue">
            <div className="card-content">
              <span className="card-title">{note.title}</span>
              <b>By {note.authorName}</b>
              <p>{note.content}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </section>
);

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
}

export default NotesList;