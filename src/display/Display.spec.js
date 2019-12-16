import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from "./Display";

test("Display renders without crashing", () => {
  render(<Display />);
});

test("displays if gate is open and if it is locked/unlocked", () => {
  // Arrange
  const { getByText } = render(<Display />);
  // Act - getting the node by text
  getByText(/open/i);
  getByText(/unlocked/i);
  getByText(/locked/i);

  // Assertion is if ^^^ is truthy
});

test("displays if gate is closed", () => {
  // Arrange
  const { getByTestId } = render(<Display />);
  // Act - getting the node by text
  getByTestId(/closed/i);
  // Assertion is if ^^^ is truthy
});

test("displays closed if the `closed` prop is `true` and open if otherwise", () => {
  const { getByText, getByTestId, rerender } = render(<Display closed />);
  getByTestId(/closed/i);

  rerender(<Display closed={false} />);
  getByText(/open/i);
});

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
  const { getByText, rerender } = render(<Display locked />);
  getByText(/Locked/i);

  rerender(<Display locked={false} />);
  getByText(/unlocked/i);
});

test("cannot be closed or opened if it is locked", () => {
  const { getByText, rerender } = render(<Display locked />);
  getByText(/Locked/i);

  rerender(<Display closed />);
  getByText(/closed/i);
});

test("when `locked` or `closed` use the `red-led` class", () => {
  const { getByText } = render(<Display closed locked />);
  const lock = getByText(/locked/i);
  const close = getByText(/closed/i);

  expect(lock).toHaveClass("red-led");
  expect(close).toHaveClass("red-led");
});

test("when `unlocked` or `open` use the `green-led` class", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  const lock = getByText(/unlocked/i);
  const close = getByText(/open/i);

  expect(lock).toHaveClass("green-led");
  expect(close).toHaveClass("green-led");
});
