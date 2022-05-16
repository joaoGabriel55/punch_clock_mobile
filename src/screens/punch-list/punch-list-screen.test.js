import { fireEvent, render } from "../../test/test-utils";
import usePunches from "./hooks/use-punches";
import PunchListScreen from "./punch-list-screen";

jest.mock("./hooks/use-punches", () => jest.fn());

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

const setup = () => render(<PunchListScreen />);

describe("PunchListScreen", () => {
  beforeEach(jest.clearAllMocks);

  describe("When punches are empty", () => {
    it("renders Not found message", () => {
      usePunchesMock();

      const { getByText } = setup();

      expect(getByText("Nada encontrado!")).toBeTruthy();
    });
  });

  describe("When punches are not empty", () => {
    it("renders punches", () => {
      usePunchesMock({
        punches: [
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
        ],
      });

      const { getByText, queryByText } = setup();

      expect(queryByText("Nada encontrado!")).toBeFalsy();

      expect(getByText("Ifood")).toBeTruthy();
      expect(getByText("01/10/2021")).toBeTruthy();
    });
  });

  describe("When some punch is removed", () => {
    it("calls deletePunch with punch removed id", () => {
      const deletePunch = jest.fn();

      usePunchesMock({
        punches: [
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
        ],
        deletePunch,
      });

      const { getByText } = setup();

      fireEvent.press(getByText("Remover"));

      expect(deletePunch).toBeCalledWith(1);
    });

    it("renders toast message", () => {
      usePunchesMock({
        punches: [
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
        ],
      });

      const { getByText } = setup();

      fireEvent.press(getByText("Remover"));

      const renderedToast = getByText(
        "Punch removido. Clique aqui para reverter."
      );

      expect(renderedToast).toBeTruthy();
    });

    describe("When toast is clicked", () => {
      it("calls restorePunch", () => {
        const restorePunch = jest.fn();

        usePunchesMock({
          punches: [
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
          ],
          restorePunch,
        });

        const { getByText } = setup();

        fireEvent.press(getByText("Remover"));

        const renderedToast = getByText(
          "Punch removido. Clique aqui para reverter."
        );

        fireEvent.press(renderedToast);

        expect(restorePunch).toBeCalledWith(
          expect.objectContaining({
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
          })
        );
      });
    });
  });
});
