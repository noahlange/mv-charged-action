import { ChargeAction, ChargeActionNotetag, WithFormula, WithTurns } from '../types';
import ChargePlugin from './ChargePlugin';

type FormulaFn = (
  item: Game_Item,
  battler: Game_Battler,
  variables: typeof $gameVariables
) => number;

export default class ChargeManager {
  public static functions: Record<string, FormulaFn> = {};

  public readonly battler: Game_Battler;
  public readonly plugin: ChargePlugin;
  public current: ChargeAction | null = null;

  public constructor(plugin: ChargePlugin, battler: Game_Battler) {
    this.plugin = plugin;
    this.battler = battler;
  }

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
      const action = new Game_Action(this.battler, false);
      // @ts-ignore
      action._targetIndex = this.current.index;
      action.setSkill(this.current.skill);
      this.battler.setAction(0, action);
    }
  }

  public createAction(action: Game_Action, notetag: ChargeActionNotetag) {
    const id = action.item().id;
    let turns = 1;

    if (this.hasTurns(notetag)) {
      turns = notetag.turns;
    }

    if (this.hasFormula(notetag)) {
        const fn = (ChargeManager.functions[id] =
        id in ChargeManager.functions
          ? ChargeManager.functions[id]
          : new Function('i', 'a', 'v', `return ${notetag.formula}`) as FormulaFn);
      // @ts-ignore
      turns = fn(action.item(), this.battler, $gameVariables);
    }

    this.current = {
      // @ts-ignore
      index: action._targetIndex,
      skill: id,
      state: notetag.state,
      turns: turns + 1,
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

  protected hasTurns(notetag: ChargeActionNotetag): notetag is WithTurns {
    return 'turns' in notetag;
  }

  protected hasFormula(notetag: ChargeActionNotetag): notetag is WithFormula {
    return 'formula' in notetag;
  }
}
