import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

//renders Dashboard
test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});
test("shows the controls and display", () => {
  const { getByText } = render(<Dashboard />);
  const controls = getByText(/Close Gate/i);
  const display = getByText(/Unlocked/i);

  expect(controls).toBeDefined();
  expect(display).toBeDefined();
});
