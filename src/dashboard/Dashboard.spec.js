import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

//renders Dashboard
test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});
