import { shimmer } from 'plugsy';

import { ChargeActionNotetag, IncludesChargeActionNotetag } from '../types';
import ChargeManager from './ChargeManager';
export default class ChargePlugin {
  public tagged: Record<number | string, ChargeActionNotetag> = {};
  public charges: Map<Game_BattlerBase, ChargeManager> = new Map();

  public constructor() {
    const skills = $plugsy.notetags.$dataSkills;
    const items = $plugsy.notetags.$dataItems;
    for (const hash of [skills, items]) {
      for (const key in hash) {
        if (hash.hasOwnProperty(key)) {
          const nt = hash[key];
          if (this.isChargeNotetag(nt)) {
            this.tagged[key] = nt.Charge || nt.charge;
          }
        }
      }
    }
    this.shim();
  }

  public clear(): void {
    this.charges = new Map();
  }

  public getAction(id: number): ChargeActionNotetag | null {
    const tagged = this.tagged[id];
    return tagged ? tagged || null : null;
  }

  public canInput = (
    battler: Game_BattlerBase,
    old: () => boolean
  ): boolean => {
    const charge = this.charges.get(battler);
    return charge ? old() && !charge.current : old();
  };

  public performChargeAction = (
    _log: Window_BattleLog,
    _fn: never,
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
    startAction: (
      actor: Game_Battler,
      action: Game_Action,
      targets: Game_Battler[]
    ) => void,
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
    end: (actor: Game_Battler) => void,
    actor: Game_Battler
  ): void => {
    const manager = this.charges.get(actor);
    if (manager && manager.current && manager.current.turns <= 0) {
      manager.destroyAction();
    }
    end(actor);
  };

  public startBattle = (
    _manager: BattleManagerStatic,
    start: (...args: any[]) => void,
    ...args: any[]
  ): void => {
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

  public processTurn = (bm: BattleManagerStatic, turn: () => void): void => {
    const actor = bm._subject;
    const manager = this.charges.get(actor);
    if (manager && manager.current) {
      manager.updateAction();
    }
    turn();
  };

  public useItem = (
    obj: Game_Battler,
    orig: (item: RPG.UsableItem) => void,
    item: RPG.UsableItem
  ) => {
    const charge = this.charges.get(obj);
    if (!charge || !charge.current) {
      orig(item);
    }
  };

  public shim(): void {
    shimmer(Game_BattlerBase.prototype, {
      canInput: this.canInput
    });
    shimmer(Game_Battler.prototype, {
      useItem: this.useItem
    });
    shimmer(Window_BattleLog.prototype, {
      endAction: this.endAction,
      // @ts-ignore
      performChargeAction: this.performChargeAction,
      startAction: this.startAction
    });
    shimmer(BattleManager, {
      processTurn: this.processTurn,
      startBattle: this.startBattle
    });
  }

  public isChargeNotetag(
    notetag: Record<string, any>
  ): notetag is IncludesChargeActionNotetag {
    if ('Charge' in notetag || 'charge' in notetag) {
      return true;
    }
    return false;
  }
}
