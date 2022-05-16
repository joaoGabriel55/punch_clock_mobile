import { useState } from "react";
import punchesData from "./mock-punches.json";

function usePunches() {
  const [punches, setPunches] = useState(punchesData);

  const deletePunch = (id) => {
    setPunches((punches) => {
      return punches.filter((punch) => id !== punch.id);
    });
  };

  const restorePunch = ({ index, punchRemoved }) => {
    setPunches((punches) => {
      punches.splice(index, 0, punchRemoved);

      return punches;
    });
  };

  return { punches, deletePunch, restorePunch };
}

export default usePunches;
