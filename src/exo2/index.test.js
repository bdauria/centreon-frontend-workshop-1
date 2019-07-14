import React from "react";
import { render } from "@testing-library/react";
import Exo2 from ".";
import axios from "axios";

describe("Exo2", () => {
  const retrievedUsers = [{ name: "Bob" }, { name: "Alice " }];

  beforeEach(() => {
    console.log("test");
  });

  it("renders the names of retrieved users", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: { data: [1, 2, 3] } })
    );
    const { getByText, findByText } = render(<Exo2 />);
    await findByText(/Total users/);
    expect(getByText(/Bob/)).toBeInTheDocument();
  });
  it("renders the total number of users", () => {});
});
