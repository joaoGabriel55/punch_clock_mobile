import { renderHook } from "@testing-library/react-native";
import { act } from "react-test-renderer";
import usePunches from "./use-punches";

describe("usePunches", () => {
  describe("When is deleted some punch", () => {
    it("returns updated punches length", () => {
      const { result } = renderHook(() => usePunches());

      expect(result.current.punches).toHaveLength(4);

      act(() => {
        result.current.deletePunch(1);
      });

      expect(result.current.punches).toHaveLength(3);
    });
  });

  describe("When is restored a removed punch", () => {
    it("returns punches with restored punch at same index position", () => {
      const { result } = renderHook(() => usePunches());

      const punchRemovedIndex = 3;
      const punchRemoved = result.current.punches[punchRemovedIndex];

      act(() => {
        result.current.deletePunch(punchRemoved.id);
      });

      act(() => {
        result.current.restorePunch({
          index: punchRemovedIndex,
          punchRemoved,
        });
      });

      const restoredPunch = result.current.punches[punchRemovedIndex];

      expect(restoredPunch).toStrictEqual(punchRemoved);
    });
  });
});
