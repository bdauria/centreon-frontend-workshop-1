import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from ".";

describe("HelloWorld", () => {
  it("renders", () => {
    const { container } = render(<HelloWorld />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
