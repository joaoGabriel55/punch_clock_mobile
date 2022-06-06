import { fireEvent, render } from "../../test/test-utils";
import usePunches from "./hooks/use-punches";
import PunchListScreen from "./punch-list-screen";

jest.mock("./hooks/use-punches", () => jest.fn());

const MOCK_PUNCHES = [
  {
    id: 1,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "01/10/2021",
  },
];

const usePunchesMock = ({
  punches = [],
  deletePunch = jest.fn(),
  restorePunch = jest.fn(),
} = {}) => {
  usePunches.mockReturnValue({
    punches,
    deletePunch,
    restorePunch,
  });
};

const setup = ({
  punches = [],
  deletePunch = jest.fn(),
  restorePunch = jest.fn(),
} = {}) => {
  usePunchesMock({ punches, deletePunch, restorePunch });

  return render(<PunchListScreen />);
};

describe("PunchListScreen", () => {
  beforeEach(jest.clearAllMocks);

  describe("When punches are empty", () => {
    it("renders Not found message", () => {
      const { getByText } = setup();

      expect(getByText("Nada encontrado!")).toBeTruthy();
    });
  });

  describe("When punches are not empty", () => {
    it("renders punches", () => {
      const { getByText, queryByText } = setup({ punches: MOCK_PUNCHES });

      expect(queryByText("Nada encontrado!")).toBeFalsy();

      expect(getByText("Ifood")).toBeTruthy();
      expect(getByText("01/10/2021")).toBeTruthy();
    });
  });

  describe("When some punch is removed", () => {
    it("calls deletePunch with punch removed id", () => {
      const deletePunch = jest.fn();

      const { getByText } = setup({ punches: MOCK_PUNCHES, deletePunch });

      fireEvent.press(getByText("Remover"));

      expect(deletePunch).toBeCalledWith(1);
    });

    it("renders toast message", () => {
      const { getByText } = setup({ punches: MOCK_PUNCHES });

      fireEvent.press(getByText("Remover"));

      const renderedToast = getByText(
        "Punch removido. Clique aqui para reverter."
      );

      expect(renderedToast).toBeTruthy();
    });

    describe("When toast is clicked", () => {
      it("calls restorePunch", () => {
        const restorePunch = jest.fn();

        const { getByText } = setup({ punches: MOCK_PUNCHES, restorePunch });

        fireEvent.press(getByText("Remover"));

        const renderedToast = getByText(
          "Punch removido. Clique aqui para reverter."
        );

        fireEvent.press(renderedToast);

        expect(restorePunch).toBeCalledWith({
          index: 0,
          punchRemoved: {
            afternoonFrom: "13:00",
            afternoonTo: "18:00",
            date: "01/10/2021",
            id: 1,
            morningFrom: "09:00",
            morningTo: "12:00",
            projectName: "Ifood",
            totalHours: "08:00",
          },
        });
      });
    });
  });
});
