import { render, screen } from "@testing-library/react";
import { CardHeader } from ".";

describe("<CardHeader />", () => {
  it("should display elements", () => {
    const props = {
      isDisplayMode: true,
      titulo: "test",
      setViewMode: () => {},
      changedTitle: "test",
      setChangedTitle: () => {},
    };
    render(<CardHeader {...props} />);

    expect(screen.getByTestId("card-header")).toBeTruthy();
  });
});
