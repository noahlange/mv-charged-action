import { PlugsyManager } from 'plugsy';

declare global {
  var $plugsy: PlugsyManager;
}

export type IncludesChargeActionNotetag =
  & { Charge: ChargeActionNotetag }
  & { charge: ChargeActionNotetag };

export interface RequiredProps {
  message?: string;
  state?: number;
}

export interface WithFormula extends RequiredProps {
  formula: string;
}

export interface WithTurns extends RequiredProps {
  turns: number;
}

export type ChargeActionNotetag = WithTurns | WithFormula;
export interface ChargeAction {
  message?: string;
  state?: number;
  index: number;
  skill: number;
  turns: number;
}
