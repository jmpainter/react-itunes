import React from "react";
import { CardContainer, Title } from "./styles";

export default function Card({ album }) {
  return (
    <CardContainer>
      <a
        href={album.link.attributes.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white" }}
        data-testid="album-link"
      >
        <img src={album["im:image"][2].label} alt={album["im:name"].label} />
        <Title>{album["im:name"].label}</Title>
      </a>
      <p>{album["im:artist"].label}</p>
      <p>{album["category"].attributes.term}</p>
      <p data-testid="release-date">
        {album["im:releaseDate"].label.slice(
          0,
          album["im:releaseDate"].label.indexOf("T")
        )}
      </p>
    </CardContainer>
  );
}
