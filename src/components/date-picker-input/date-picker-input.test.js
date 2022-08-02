import DatePicker from "@react-native-community/datetimepicker";
import { fireEvent, render } from "@test/test-utils";
import { TextInput } from "react-native";
import DatePickerInput from "./date-picker-input";

jest.mock("@react-native-community/datetimepicker", () => {
  return jest.fn();
});

const DatePickerMock = (isDismissed) => {
  DatePicker.mockImplementation(({ value, onChange }) => {
    const handleChange = () => {
      onChange(
        { type: isDismissed ? "dismissed" : "" },
        new Date(2022, 2, 12, 10, 0)
      );
    };

    return (
      <TextInput
        testID="date-picker"
        value={value}
        onChangeText={handleChange}
      />
    );
  });
};

const setup = ({
  open = false,
  onSelectDate,
  onClose,
  isDismissed = false,
} = {}) => {
  DatePickerMock(isDismissed);

  return render(
    <DatePickerInput
      open={open}
      onSelectDate={onSelectDate}
      onClose={onClose}
      value={new Date(2022, 2, 12, 8, 0)}
    />
  );
};

describe("DatePickerInput", () => {
  beforeEach(jest.clearAllMocks);

  describe("When date picker open prop is false", () => {
    it("does not render the component", () => {
      const { queryByTestId } = setup({ open: false });

      expect(queryByTestId("date-picker")).toBeNull();
    });
  });

  describe("When date picker open prop is true", () => {
    it("renders the component", () => {
      const { getByTestId } = setup({ open: true });

      expect(getByTestId("date-picker")).toBeTruthy();
    });

    describe("When date picker calls dismissed event", () => {
      it("calls onClose callback", () => {
        const onClose = jest.fn();

        const { getByTestId } = setup({
          open: true,
          onClose,
          isDismissed: true,
        });

        fireEvent.changeText(getByTestId("date-picker"), "10:00");

        expect(onClose).toHaveBeenCalled();
      });
    });

    describe("When date picker does not call dismissed event", () => {
      it("calls onSelectDate callback", () => {
        const onSelectDate = jest.fn();

        const { getByTestId } = setup({ open: true, onSelectDate });

        fireEvent.changeText(getByTestId("date-picker"), "10:00");

        const expectedDate = new Date(2022, 2, 12, 10, 0);

        expect(onSelectDate).toHaveBeenCalledWith(expectedDate);
      });
    });
  });
});
