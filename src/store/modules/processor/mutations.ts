import type { Mutation } from "vuex";
import { ProcessorState } from "./state";
import {
  AVAILABLES_PROCESSOR_RECORDS as AVAILABLES_RECORDS,
  CYCLE_TIME,
} from "@/config/constants";
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
    state.isTransferingDataMemoryToRecord = true;
    state.data = data;
    state.memoryData = new Map<string, Instruction>();
    state.currentMemoryAddress = 0;

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

      const map: Map<string, Instruction> = new Map<string, Instruction>(
        state.memoryData
      );

      Vue.set(state, "memoryData", map);

      setTimeout(() => {
        moveToIR(state, instruction);
      }, CYCLE_TIME);

      state.currentMemoryAddress++;
    });
  });
};

const moveToIR: Mutation<ProcessorState> = async (state, instruction) => {
  await new Promise((resolve) => {
    state.isBusEnabled = true;
    state.isMovingToIR = true;
    setTimeout(() => {
      state.isBusEnabled = false;
      state.processorRecords.set("IR", {
        addressType: "directo",
        value: instruction,
      });

      const map: Map<string, RecordData> = new Map<string, RecordData>(
        state.processorRecords
      );

      Vue.set(state, "processorRecords", map);

      state.isMovingToIR = false;

      const instructionKeys = instruction.split(" ");

      console.log(instructionKeys);
      switch (instructionKeys[0]) {
        case "mov":
          mov(state, { op1: instructionKeys[1], op2: instructionKeys[2] });

          break;
        default:
          break;
      }
    }, CYCLE_TIME);
  });
};

const mov: Mutation<ProcessorState> = async (state, { op1, op2 }) => {
  const OP2IsNumber = parseInt(op2);
  console.log(OP2IsNumber);
  if (OP2IsNumber) {
    moveToRecordData(state, { record: op1, value: OP2IsNumber });
    return;
  }
};

const moveToRecordData: Mutation<ProcessorState> = async (
  state,
  { record, value }
) => {
  if (!AVAILABLES_RECORDS[record]) return;
  state.recordData.set(record, {
    addressType: "directo",
    value: value,
  });

  const map: Map<string, RecordData> = new Map<string, RecordData>(
    state.recordData
  );

  state.processorRecords.set("CP", {
    addressType: "directo",
    value: state.currentMemoryAddress + 1,
  });

  const mapCP: Map<string, RecordData> = new Map<string, RecordData>(
    state.processorRecords
  );

  Vue.set(state, "recordData", map);
  Vue.set(state, "processorRecords", mapCP);
};
