import type { Mutation } from "vuex";
import { ProcessorState } from "./state";

export const setIsBusEnabled: Mutation<ProcessorState> = async (
  state,
  value: boolean
) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      state.isBusEnabled = value;
    }, 2000);
  });
};

export const transferDataMemoryToRecord: Mutation<ProcessorState> = async (
  state,
  data: number
) => {
  await new Promise((resolve) => {
    state.isBusEnabled = true;
    state.isTransferingDataMemoryToRecord = true;
    state.data = data;
    setTimeout(() => {
      state.isBusEnabled = false;
      state.isTransferingDataMemoryToRecord = false;
      state.data = data;
    }, 2000);
  });
};
