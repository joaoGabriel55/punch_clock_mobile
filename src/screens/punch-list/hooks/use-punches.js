import { useState } from "react";

const DATA = [
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
  {
    id: 2,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "02/10/2021",
  },
  {
    id: 3,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "03/10/2021",
  },
  {
    id: 4,
    projectName: "Ifood",
    morningFrom: "09:00",
    morningTo: "12:00",
    afternoonFrom: "13:00",
    afternoonTo: "18:00",
    totalHours: "08:00",
    date: "04/10/2021",
  },
];

function usePunches() {
  const [punches, setPunches] = useState(DATA);

  const deletePunch = (id) => {
    setPunches((punches) => {
      return punches.filter((punch) => id !== punch.id);
    });
  };

  return {
    punches,
    deletePunch,
  };
}

export default usePunches;
