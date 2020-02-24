import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "../redux/store";
import moviesData from "../utils/movieData";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
});

test("<App />", async () => {
  fetch.mockResponseOnce(JSON.stringify(moviesData));
  const { getAllByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitForElement(() => getAllByTestId("album-link"));
  expect(Array.from(getAllByTestId("album-link")).length).toBe(3);
});

test("<App /> with error on retrieving data", async () => {
  const { getByText, queryAllByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitForElement(() => queryAllByTestId("album-link"));
  expect(
    getByText("There has been an error with retrieving the albums")
  ).toBeTruthy();
});
