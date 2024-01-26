import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  theme: string | undefined;
  color: string | undefined;
};

export const useGlobalStore = create<State>()(
  immer((set) => ({
    theme: undefined,
    color: undefined,
  }))
);
