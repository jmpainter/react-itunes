import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "./Card";
import albumsData from "../utils/albumsData";

afterEach(() => {
  cleanup();
});

const album = albumsData.feed.entry[0];

test("<Card />", () => {
  const { getByText, getByTestId, getByAltText } = render(
    <Card album={album} />
  );
  expect(getByTestId("album-link")).toBeTruthy();
  expect(getByAltText(album["im:name"].label)).toBeTruthy();
  expect(getByText(album["im:name"].label)).toBeTruthy();
  expect(getByText(album["im:artist"].label)).toBeTruthy();
  expect(getByText(album["category"].attributes.term)).toBeTruthy();
  expect(getByTestId("release-date")).toBeTruthy();
});
