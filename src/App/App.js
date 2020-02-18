import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import { Container } from "./styles";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState(undefined);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then(res => res.json())
      .then(data => setAlbums(data.feed.entry))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Router>
        <Route
          exact
          path="/"
          render={props => <Home albums={albums} {...props} />}
        />
      </Router>
    </Container>
  );
}

export default App;
