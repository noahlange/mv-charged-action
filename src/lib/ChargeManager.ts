import ChargePlugin from './ChargePlugin';
import { ChargeAction } from '../types';

export default class ChargeManager {
  public readonly battler: Game_Battler;
  public readonly plugin: ChargePlugin;

  public current: ChargeAction | null = null;

  public updateAction() {
    if (this.current) {
      if (!this.battler.currentAction()) {
        this.current.turns--;
      }
      if (this.current.turns <= 0) {
        this.executeAction();
      }
    }
  }

  public executeAction() {
    if (this.current) {
      const action = new Game_Action(this.battler, true);
      // @ts-ignore
      action._targetIndex = this.current.index;
      action.setSkill(this.current.skill);
      this.battler.setAction(0, action);
    }
  }

  public createAction(action: Game_Action, chargeAction: ChargeAction) {
    this.current = {
      skill: action.item().id,
      turns: chargeAction.turns || 1,
      // @ts-ignore
      index: action._targetIndex,
      state: chargeAction.state
    };
    if (this.current.state) {
      this.battler.addNewState(this.current.state);
    }
  }

  public destroyAction() {
    if (this.current && this.current.state) {
      this.battler.eraseState(this.current.state);
    }
    this.current = null;
  }

  public constructor(plugin: ChargePlugin, battler: Game_Battler) {
    this.plugin = plugin;
    this.battler = battler;
  }
}
