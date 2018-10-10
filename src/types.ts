import PlugsyManager from "plugsy/types/lib/PlugsyManager";

declare global {
  var $plugsy: PlugsyManager;
}

export interface ChargeAction {
  skill: number;
  turns: number;
  index: number;
  state: number;
  message?: string;
}