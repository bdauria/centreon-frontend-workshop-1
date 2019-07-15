import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Exo2 from ".";

describe("Exo2", () => {
  it("is activated by default", () => {
    const { getByText } = render(<Exo1 />);

    expect(getByText(/Activated/)).toBeInTheDocument();
    expect(getByText(/Activated/)).toHaveStyle("color: green");
  });

  it("activates when clicking on activate", () => {
    const { getByText } = render(<Exo1 />);

    fireEvent.click(getByText(/deactivate/i));

    expect(getByText(/Deactivated/)).toBeInTheDocument();
    expect(getByText(/Deactivated/)).toHaveStyle("color: red");
  });

  it("deactivates when clicking on deactivate", () => {
    const { getByText } = render(<Exo1 />);

    fireEvent.click(getByText(/Deactivate/));
    fireEvent.click(getByText(/Activate/));

    expect(getByText(/Activated/)).toBeInTheDocument();
    expect(getByText(/Activated/)).toHaveStyle("color: green");
  });
});