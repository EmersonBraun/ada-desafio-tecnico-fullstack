import { render, screen } from "@testing-library/react";
import { TextArea } from ".";

describe("<TextArea />", () => {
  it("should display elements", () => {
    render(<TextArea />);

    expect(screen.getByTestId("text-area")).toBeTruthy();
  });
});
