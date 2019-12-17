import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("Controls renders without crashing", () => {
  render(<Controls />);
});
test("provide buttons to toggle the `closed` and `locked` states", () => {
  const { getAllByText } = render(<Controls />);
  const buttons = getAllByText(/gate/i);
  expect(buttons).toBeDefined();
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
  const { getByText, rerender } = render(<Controls closed locked />);
  getByText(/Unlock Gate/i);
  getByText(/Open Gate/i);

  rerender(<Controls closed={false} locked={false} />);
  getByText(/lock Gate/i);
  getByText(/close Gate/i);
});
test("the closed toggle button is disabled if the gate is locked", () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(<Controls locked toggleClosed={toggleClosed} />);
  const closedBtn = getByText(/close gate/i);
  fireEvent.click(closedBtn);
  expect(toggleClosed).not.toHaveBeenCalled();
});
test("the locked toggle button is disabled if the gate is open", () => {
  const toggleLocked = jest.fn();
  const { getByText } = render(
    <Controls closed={false} toggleLocked={toggleLocked} />
  );
  const lockedBtn = getByText(/lock gate/i);
  fireEvent.click(lockedBtn);
  expect(toggleLocked).not.toHaveBeenCalled();
});
