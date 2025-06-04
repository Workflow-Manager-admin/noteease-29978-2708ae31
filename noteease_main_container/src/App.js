import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';

// PUBLIC_INTERFACE
/**
 * Main application component for NoteEase.
 * Sets up the navigation bar and renders the MainContainer.
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          {/* Updated to NoteEase branding */}
          <div className="logo">
            <span className="logo-symbol">📝</span> NoteEase
          </div>
          {/* Removed template button */}
        </div>
      </nav>

      {/* Main content area that will hold the MainContainer */}
      <main className="main-content-area">
        <MainContainer />
      </main>
    </div>
  );
}

export default App;