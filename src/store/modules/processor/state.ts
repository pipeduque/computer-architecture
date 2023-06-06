export interface ProcessorState {
  data: null | string | number;

  isBusEnabled: boolean;
  isMovingToIR: boolean;

  isTransferingDataMemoryToRecord: boolean;
  currentMemoryAddress: number;
  memoryData: Map<string, Instruction>;
  recordData: Map<string, RecordData>;
  processorRecords: Map<string, RecordData>;
}

const defaultState: ProcessorState = {
  data: null,

  isBusEnabled: false,
  isMovingToIR: false,

  isTransferingDataMemoryToRecord: false,
  memoryData: new Map<string, Instruction>([]),
  currentMemoryAddress: 0,

  recordData: new Map<string, RecordData>([
    ["AL", { addressType: "", value: 0 }],
    ["BL", { addressType: "", value: 0 }],
    ["CL", { addressType: "", value: 0 }],
    ["DL", { addressType: "", value: 0 }],
  ]),

  processorRecords: new Map<string, RecordData>([
    ["MAR", { addressType: "", value: 0 }],
    ["MBR", { addressType: "", value: 0 }],
    ["CP", { addressType: "", value: 0 }],
    ["IR", { addressType: "", value: 0 }],
  ]),
};

export default {
  ...defaultState,
};
