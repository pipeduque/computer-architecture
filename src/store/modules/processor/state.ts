export interface ProcessorState {
  data: null | string | number;
  isBusEnabled: boolean;
  isTransferingDataMemoryToRecord: boolean;
  currentMemoryAddress: number;
  memoryData: Map<string, Instruction>;
  recordData: MemoryRecord[];
  processorRecords: Map<string, RecordData>;
}

const defaultState: ProcessorState = {
  data: null,
  isBusEnabled: false,
  isTransferingDataMemoryToRecord: false,
  memoryData: new Map<string, Instruction>([
    ["MAR", { address: "", value: "" }],
    ["MBR", { address: "", value: "" }],
    ["CP", { address: "", value: "" }],
    ["IR", { address: "", value: "" }],
  ]),
  currentMemoryAddress: 0,

  recordData: [
    {
      recordType: "AL",
      recordData: [
        {
          addressType: "",
          value: 0,
        },
      ],
    },
    {
      recordType: "BL",
      recordData: [
        {
          addressType: "",
          value: 0,
        },
      ],
    },
    {
      recordType: "CL",
      recordData: [
        {
          addressType: "",
          value: 0,
        },
      ],
    },
    {
      recordType: "DL",
      recordData: [
        {
          addressType: "",
          value: 0,
        },
      ],
    },
  ],

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
