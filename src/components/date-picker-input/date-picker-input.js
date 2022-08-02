import React from "react";
import DatePicker from "@react-native-community/datetimepicker";

const EVENTS = {
  dismissed: "dismissed",
};

const DatePickerInput = ({
  open = false,
  value = new Date(),
  onSelectDate,
  onClose,
  ...props
}) => {
  if (!open) return null;

  const handleChangeDatePicker = (event, date) => {
    if (event.type === EVENTS.dismissed) {
      onClose();
    } else {
      onSelectDate(date);
    }
  };

  return (
    <DatePicker
      mode="time"
      value={value}
      onChange={handleChangeDatePicker}
      {...props}
    />
  );
};

export default DatePickerInput;
