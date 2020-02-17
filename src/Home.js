import React, { useState } from "react";
import Card from "./Card";

export default function Home({ albums }) {
  const [term, setTerm] = useState("");

  const changeTerm = event => {
    setTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(term);
  };

  return (
    <div>
      <h1>React ITunes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" />
        <input id="search" value={term} onChange={changeTerm} />
        <button type="submit">Search</button>
      </form>
      <div style={{ display: "flex", maxWidth: "90%", flexWrap: "wrap" }}>
        {albums.map(album => (
          <Card album={album} />
        ))}
      </div>
    </div>
  );
}

Home.defaultProps = {
  albums: []
};
