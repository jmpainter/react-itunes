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
      <h1>React Itunes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" />
        <input id="search" value={term} onChange={changeTerm} />
        <button type="submit">Search</button>
      </form>
      <div style={{ display: "flex" }}>
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
