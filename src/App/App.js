import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../Home/Home";
import { Container } from "./styles";
import { getAlbums } from "../redux/actions";
import "./App.css";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Container>
  );
}

export default connect()(App);
