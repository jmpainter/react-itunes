import React, { useState } from "react";
import Card from "../Card/Card";
import { Button } from "./styles";
import { Input } from "./styles";

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
      <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
        <label htmlFor="search" />
        <Input id="search" value={term} onChange={changeTerm} />
        <Button type="submit">Search</Button>
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
