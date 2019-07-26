import React from "react";
import { render } from "@testing-library/react";
import Exo3 from ".";
import axios from "axios";

jest.mock("axios");

describe("Exo3", () => {
  const retrievedUsers = [{ name: "Bob" }, { name: "Alice " }];

  beforeEach(() => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: retrievedUsers })
    );
  });

  it("renders the names of retrieved users", async () => {
    const { getByText, findByText } = render(<Exo3 />);
    await findByText(/Total users/);
    expect(getByText(/Bob/)).toBeInTheDocument();
    expect(getByText(/Alice/)).toBeInTheDocument();
  });

  it("renders the total number of users", async () => {
    const { getByText, findByText } = render(<Exo3 />);
    await findByText(/Total users/);

    expect(getByText(/Total users: 2/)).toBeInTheDocument();
  });
});