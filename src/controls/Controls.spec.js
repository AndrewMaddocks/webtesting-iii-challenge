import React from "react";
import { render } from "@testing-library/react";

import Controls from "./Controls";

test("Controls renders without crashing", () => {
  render(<Controls />);
});
