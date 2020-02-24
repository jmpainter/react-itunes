import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Home } from "./Home";
import albumsData from "../utils/albumsData";

afterEach(() => {
  cleanup();
});

test("<Home />", () => {
  const { getAllByTestId, getByText, getByLabelText, getByTestId } = render(
    <Home albums={albumsData.feed.entry} error="" />
  );
  expect(Array.from(getAllByTestId("album-link")).length).toBe(3);
  expect(getByText("React ITunes")).toBeTruthy();
  expect(getByLabelText("Filter:")).toBeTruthy();
  expect(getByTestId("filter-input")).toBeTruthy();
});

test("<Home /> with filter applied", () => {
  const { getByTestId, getAllByTestId } = render(
    <Home albums={albumsData.feed.entry} error="" />
  );
  fireEvent.change(getByTestId("filter-input"), {
    target: { value: "map" }
  });
  expect(Array.from(getAllByTestId("album-link")).length).toBe(1);
});

test("<Home /> with error", () => {
  const { getByTestId } = render(<Home albums={[]} error="error" />);
  expect(getByTestId("albums-error")).toBeTruthy();
});
