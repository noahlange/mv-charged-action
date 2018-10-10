import { shimmer } from 'plugsy';

import ChargeManager from './ChargeManager';
import { ChargeAction } from '../types';

export default class ChargePlugin {
  public tagged: Record<number | string, any> = {};
  public charges: Map<Game_BattlerBase, ChargeManager> = new Map();

  public clear(): void {
    this.charges = new Map();
  }

  public getAction(id: number): ChargeAction | null {
    const tagged = this.tagged[id];
    return tagged ? tagged.Charge || null : null;
  }

  public canInput = (battler: Game_BattlerBase, old: Function): boolean => {
    const charge = this.charges.get(battler);
    return charge ? old() && !charge.current : old();
  };

  public performChargeAction = (
    _log: Window_BattleLog,
    _fn: null,
    actor: Game_Battler,
    action: Game_Action
  ): void => {
    const manager = this.charges.get(actor);
    if (manager && !manager.current) {
      const res = this.getAction(action.item().id);
      if (res) {
        manager.createAction(action, res);
      }
    }
    BattleManager._targets = [];
  };

  public startAction = (
    log: Window_BattleLog,
    startAction: Function,
    actor: Game_Battler,
    action: Game_Action,
    targets: Game_Battler[]
  ): void => {
    const manager = this.charges.get(actor);
    const charge = this.getAction(action.item().id);
    if (manager && charge && !manager.current) {
      log.push('performChargeAction', actor, action);
      if (charge.message) {
        log.push(
          'addText',
          actor.name() + charge.message.format(action.item().name)
        );
      }
    } else {
      startAction(actor, action, targets);
    }
  };

  public endAction = (
    _log: Window_BattleLog,
    end: Function,
    actor: Game_Battler
  ) => {
    const manager = this.charges.get(actor);
    if (manager && manager.current && manager.current.turns <= 0) {
      manager.destroyAction();
    }
    end(actor);
  };

  public startBattle = (
    _manager: BattleManagerStatic,
    start: Function,
    ...args: any[]
  ) => {
    this.clear();
    const party = $gameParty.members();
    const troop = $gameTroop.members();
    for (const arr of [party, troop]) {
      for (const battler of arr) {
        this.charges.set(battler, new ChargeManager(this, battler));
      }
    }
    start(...args);
  };

  public processTurn = (bm: BattleManagerStatic, turn: Function) => {
    const actor = bm._subject;
    const manager = this.charges.get(actor);
    if (manager && manager.current) {
      manager.updateAction();
    }
    turn();
  };

  public constructor() {
    const skills = window.$plugsy.notetags.$dataSkills;
    const items = window.$plugsy.notetags.$dataItems;
    for (const arr of [skills, items]) {
      for (const key in arr) {
        this.tagged[key] = arr[key];
      }
    }

    shimmer(Game_BattlerBase.prototype, {
      canInput: this.canInput
    });
    shimmer(Window_BattleLog.prototype, {
      // @ts-ignore
      performChargeAction: this.performChargeAction,
      startAction: this.startAction,
      endAction: this.endAction
    });
    shimmer(BattleManager, {
      processTurn: this.processTurn,
      startBattle: this.startBattle
    });
  }
}
