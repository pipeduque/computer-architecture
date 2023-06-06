declare interface MemoryRecord {
  recordType: string;
  recordData: RecordData[];
}

declare interface RecordData {
  addressType: string;
  value: number;
}

declare interface Instruction {
  address: string;
  value: string;
}
