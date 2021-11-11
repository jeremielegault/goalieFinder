import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>I am chat</h1>} />
          <Route path="/" element={<h1>I am homepage</h1>} />
        </Routes>
        <TinderCards />
      </Router>
    </div>
  );
}

export default App;

// {/* Tender Cards */}
// {/* Buttons below the cards */}
// {/* chat screen */}
// {/* individual chat screen */}
