import { useState } from "react";
import punchesData from "@test/mocks/punches.json";

function usePunches() {
  const [punches, setPunches] = useState(punchesData);

  const deletePunch = (id) => {
    setPunches((punches) => {
      return punches.filter((punch) => id !== punch.id);
    });
  };

  const restorePunch = ({ index, punchRemoved }) => {
    setPunches((punches) => {
      const restoredPunches = [...punches];

      restoredPunches.splice(index, 0, punchRemoved);

      return restoredPunches;
    });
  };

  return { punches, deletePunch, restorePunch };
}

export default usePunches;
