import type { Mutation } from "vuex";
import { ProcessorState } from "./state";
import { CYCLE_TIME } from "@/config/constants";
import Vue from "vue";

export const setIsBusEnabled: Mutation<ProcessorState> = async (
  state,
  value: boolean
) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      state.isBusEnabled = value;
    }, CYCLE_TIME);
  });
};

export const transferDataMemoryToRecord: Mutation<ProcessorState> = async (
  state,
  data: string
) => {
  await new Promise((resolve) => {
    state.isBusEnabled = true;
    state.isTransferingDataMemoryToRecord = true;
    state.data = data;
    state.memoryData = new Map<string, Instruction>();
    state.currentMemoryAddress = 0;

    /*
    console.log("--- INICIO--");
    console.log("proccesorRecords");
    console.log(state.processorRecords);
    console.log("memoryData");
    console.log(state.memoryData);
    */
    setTimeout(() => {
      state.isBusEnabled = false;
      state.isTransferingDataMemoryToRecord = false;
      state.data = data;

      const instructions = data.split("\n");

      const programCounter = state.processorRecords.get("CP")?.value;

      instructions.forEach((instruction) => {
        state.processorRecords.set("MAR", {
          addressType: "",
          value: programCounter || 0,
        });

        state.memoryData.set(state.currentMemoryAddress.toString(), {
          address: "directo",
          value: instruction,
        });

        const map: Map<string, Instruction> = { ...state.memoryData };

        Vue.set(state, "memoryData", map);

        setTimeout(() => {
          console.log(instruction);
        }, CYCLE_TIME);

        state.currentMemoryAddress++;
        console.log(state.memoryData);
      });
    }, CYCLE_TIME);
  });
};
