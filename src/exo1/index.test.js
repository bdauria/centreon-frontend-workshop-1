import React from "react";
import { render } from "@testing-library/react";
import Exo1 from ".";

describe("Exo1", () => {
  it("renders with loading indicator when loading is true", () => {
    const { container } = render(<Exo1 loading />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders nothing when loading is false", () => {
    const { container } = render(<Exo1 />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
