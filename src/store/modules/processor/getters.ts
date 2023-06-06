import { Getter } from "vuex";
import { ProcessorState } from "./state";
import { CYCLE_TIME } from "@/config/constants";

export const agetInstance: Getter<ProcessorState, unknown> = (state) => {
  state.isBusEnabled = true;
  return new Promise((resolve: any) => {
    setTimeout(() => {
      state.isBusEnabled = false;
      // Realiza las operaciones necesarias dentro del timeout
      resolve("hola");
    }, CYCLE_TIME); // Tiempo de espera en milisegundos (2 segundos en este ejemplo)
  });
};

export const getMemoryData: Getter<ProcessorState, unknown> = (state) => {
  return state.memoryData;
};
