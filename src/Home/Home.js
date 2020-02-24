import React, { useState } from "react";
import Card from "../Card/Card";
import { Input, Form, Error } from "./styles";
import { connect } from "react-redux";

export function Home({ albums, error }) {
  const [filter, setfilter] = useState("");

  const changeFilter = event => {
    setfilter(event.target.value.toLowerCase());
  };
  return (
    <div>
      <h1>React ITunes</h1>
      {error !== "" ? (
        <Error data-testid="albums-error">
          There has been an error with retrieving the albums
        </Error>
      ) : (
        <>
          <Form>
            <label htmlFor="filter"> Filter: </label>
            <Input
              id="filter"
              value={filter}
              onChange={changeFilter}
              data-testid="filter-input"
            />
          </Form>
          <div style={{ display: "flex", maxWidth: "90%", flexWrap: "wrap" }}>
            {albums
              .filter(album => {
                if (filter !== "") {
                  if (album["im:name"].label.toLowerCase().includes(filter)) {
                    return true;
                  } else if (album["im:artist"].label.includes(filter)) {
                    return true;
                  } else {
                    return false;
                  }
                }
                return true;
              })
              .map(album => (
                <Card key={album.id.attributes["im:id"]} album={album} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

Home.defaultProps = {
  albums: []
};

const mapStateToProps = state => ({
  albums: state.albums,
  error: state.error
});

export default connect(mapStateToProps)(Home);
