export interface ProcessorState {
  data: null | string | number;
  isBusEnabled: boolean;
  isTransferingDataMemoryToRecord: boolean;
}

const defaultState: ProcessorState = {
  data: null,
  isBusEnabled: false,
  isTransferingDataMemoryToRecord: false,
};

export default {
  ...defaultState,
};
