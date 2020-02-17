import React from "react";

export default function Card({ album }) {
  console.log(album);
  return (
    <div style={{ width: "200px" }}>
      <a
        href={album.link.attributes.href}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img src={album["im:image"][2].label} alt={album["im:name"].label} />
        <h3>{album["im:name"].label}</h3>
      </a>
      <p>{album["im:artist"].label}</p>
      <p>{album["category"].attributes.term.label}</p>
      <p>
        {album["im:releaseDate"].label.slice(
          0,
          album["im:releaseDate"].label.indexOf("T")
        )}
      </p>
    </div>
  );
}
