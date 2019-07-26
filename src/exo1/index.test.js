import React from "react";
import { render } from "@testing-library/react";
import Exo1 from ".";

describe("Exo1", () => {
  it("renders with loading indicator when loading is true", () => {
    const { getByText } = render(<Exo1 loading />);

    const loadingIndicator = getByText(/Loading.../);
    expect(loadingIndicator).toHaveStyle('font-familiy: bold');
    expect(loadingIndicator).toHaveStyle('font-size: 14');
    expect(loadingIndicator).toHaveStyle('color: blue');
  });

  it("renders nothing when loading is false", () => {
    const { queryByText } = render(<Exo1 />);

    expect(queryByText(/Loading.../)).toBeNull();
  });
});