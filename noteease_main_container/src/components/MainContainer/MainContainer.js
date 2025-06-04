import React from 'react';
import './MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component for NoteEase application.
 * Displays the search bar, create note button, category filters, and notes list.
 */
function MainContainer() {
  return (
    <div className="main-container">
      <div className="toolbar">
        <input type="text" placeholder="Search notes..." className="search-bar" />
        <button className="btn create-note-btn">Create Note</button>
      </div>

      <div className="category-filters">
        {/* Placeholder for category filter chips */}
        <span className="chip">All</span>
        <span className="chip">Work</span>
        <span className="chip">Personal</span>
        <span className="chip">Ideas</span>
      </div>

      <div className="notes-list">
        {/* Placeholder for pinned notes */}
        <div className="note-item pinned">
          <h3 className="note-title">Pinned Note 1</h3>
          <p className="note-snippet">This is a snippet of a pinned note...</p>
          <div className="note-actions">
            <button className="btn-icon" aria-label="Unpin Note">📌</button>
            <button className="btn-icon" aria-label="Edit Note">✏️</button>
            <button className="btn-icon" aria-label="Delete Note">🗑️</button>
          </div>
        </div>

        {/* Placeholder for regular notes */}
        <div className="note-item">
          <h3 className="note-title">Regular Note 1</h3>
          <p className="note-snippet">This is a snippet of a regular note...</p>
          <div className="note-actions">
            <button className="btn-icon" aria-label="Pin Note">📌</button>
            <button className="btn-icon" aria-label="Edit Note">✏️</button>
            <button className="btn-icon" aria-label="Delete Note">🗑️</button>
          </div>
        </div>
        <div className="note-item">
          <h3 className="note-title">Regular Note 2</h3>
          <p className="note-snippet">Another regular note with some more content to see how it wraps...</p>
          <div className="note-actions">
            <button className="btn-icon" aria-label="Pin Note">📌</button>
            <button className="btn-icon" aria-label="Edit Note">✏️</button>
            <button className="btn-icon" aria-label="Delete Note">🗑️</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
