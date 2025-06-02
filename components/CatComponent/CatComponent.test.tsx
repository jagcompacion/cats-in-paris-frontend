import { render, waitFor } from "@testing-library/react-native";
import CatComponent from "./CatComponent";

const mockUseCat = jest.fn();
jest.mock("../../hooks/useCat", () => () => mockUseCat());

describe("CatComponent", () => {
  it("displays cat image and description when data is loaded", async () => {
    mockUseCat.mockReturnValue({
      data: {
        imageUrl: "https://example.com/cat.jpg",
        expertDescription: "A Parisian cat lounging by the Seine.",
      },
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    });
    const { getByText, getByTestId } = render(<CatComponent />);
    await waitFor(() => {
      expect(getByText("A Parisian cat lounging by the Seine.")).toBeTruthy();
      expect(getByTestId("cat-image")).toBeTruthy();
    });
  });

  it("shows loading skeleton when loading", async () => {
    mockUseCat.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: jest.fn(),
    });
    const { getByTestId } = render(<CatComponent />);
    await waitFor(() => {
      expect(getByTestId("skeleton")).toBeTruthy();
    });
  });

  it("shows error message when error occurs", async () => {
    mockUseCat.mockReturnValue({
      data: null,
      isLoading: false,
      error: "Failed to fetch cat",
      refetch: jest.fn(),
    });
    const { getByText } = render(<CatComponent />);
    await waitFor(() => {
      expect(getByText("Failed to fetch cat")).toBeTruthy();
    });
  });
});
