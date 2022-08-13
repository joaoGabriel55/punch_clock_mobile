import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { showToast, TOAST_POSITION, TOAST_TYPES } from "@utils/toast";

const schema = yup
  .object({
    project: yup.string().required("Projeto obrigatório"),
    morningFrom: yup
      .string()
      .required("Horário início de expediente obrigatório"),
    morningTo: yup.string().required("Horário início de almoço obrigatório"),
    afternoonFrom: yup.string().required("Horário final de almoço obrigatório"),
    afternoonTo: yup
      .string()
      .required("Horário final de expediente obrigatório"),
  })
  .required();

export const handlePunchDates = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const createDateDefiningHours = (hours, minutes) =>
    new Date(currentYear, currentMonth, currentDay, hours, minutes);

  return {
    date,
    createDateDefiningHours,
  };
};

const useNewPunchScreen = () => {
  const [currentTimeInput, setCurrentTimeInput] = useState(null);
  const navigation = useNavigation();

  const { date, createDateDefiningHours } = handlePunchDates();
  const today = format(date, "dd/MM/yyyy");
  const open = !!currentTimeInput;

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      project: "",
      morningFrom: createDateDefiningHours(8, 0),
      morningTo: createDateDefiningHours(12, 0),
      afternoonFrom: createDateDefiningHours(13, 0),
      afternoonTo: createDateDefiningHours(18, 0),
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const values = getValues();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onDateChange = (date) => {
    setValue(currentTimeInput, date);
    setCurrentTimeInput(null);
  };

  useEffect(() => {
    const firstErrorKey = Object.keys(errors)[0];
    const firstError = errors?.[firstErrorKey]?.message;

    if (firstError) {
      showToast({
        text: firstError,
        type: TOAST_TYPES.ERROR,
        position: TOAST_POSITION.TOP,
      });
    }
  }, [errors]);

  return {
    control,
    navigation,
    today,
    currentTimeInput,
    values,
    open,
    onSubmit,
    onDateChange,
    setCurrentTimeInput,
    handleSubmit,
  };
};

export default useNewPunchScreen;
