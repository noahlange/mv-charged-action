/*!
 * 
 *   Plugin enabling variable-duration skill charges.
 *   Loosely patterned off of Victor Sant's ChargeActions plugin.
 *   You'll need to have Plugsy installed in order to use this plugin.
 *       
 */!function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=plugsy},function(t,e,r){"use strict";r.r(e);var n=r(0),s=r.n(n);class i{constructor(t,e){this.current=null,this.plugin=t,this.battler=e}updateAction(){this.current&&(this.battler.currentAction()||this.current.turns--,this.current.turns<=0&&this.executeAction())}executeAction(){if(this.current){const t=new Game_Action(this.battler,!0);t._targetIndex=this.current.index,t.setSkill(this.current.skill),this.battler.setAction(0,t)}}createAction(t,e){this.current={skill:t.item().id,turns:e.turns||1,index:t._targetIndex,state:e.state},this.current.state&&this.battler.addNewState(this.current.state)}destroyAction(){this.current&&this.current.state&&this.battler.eraseState(this.current.state),this.current=null}}class c{constructor(){this.tagged={},this.charges=new Map,this.canInput=((t,e)=>{const r=this.charges.get(t);return r?e()&&!r.current:e()}),this.performChargeAction=((t,e,r,n)=>{const s=this.charges.get(r);if(s&&!s.current){const t=this.getAction(n.item().id);t&&s.createAction(n,t)}BattleManager._targets=[]}),this.startAction=((t,e,r,n,s)=>{const i=this.charges.get(r),c=this.getAction(n.item().id);i&&c&&!i.current?(t.push("performChargeAction",r,n),c.message&&t.push("addText",r.name()+c.message.format(n.item().name))):e(r,n,s)}),this.endAction=((t,e,r)=>{const n=this.charges.get(r);n&&n.current&&n.current.turns<=0&&n.destroyAction(),e(r)}),this.startBattle=((t,e,...r)=>{this.clear();const n=$gameParty.members(),s=$gameTroop.members();for(const t of[n,s])for(const e of t)this.charges.set(e,new i(this,e));e(...r)}),this.processTurn=((t,e)=>{const r=t._subject,n=this.charges.get(r);n&&n.current&&n.updateAction(),e()});const t=window.$plugsy.notetags.$dataSkills,e=window.$plugsy.notetags.$dataItems;for(const r of[t,e])for(const t in r)this.tagged[t]=r[t];Object(n.shimmer)(Game_BattlerBase.prototype,{canInput:this.canInput}),Object(n.shimmer)(Window_BattleLog.prototype,{performChargeAction:this.performChargeAction,startAction:this.startAction,endAction:this.endAction}),Object(n.shimmer)(BattleManager,{processTurn:this.processTurn,startBattle:this.startBattle})}clear(){this.charges=new Map}getAction(t){const e=this.tagged[t];return e&&e.Charge||null}}r.d(e,"default",function(){return o});class o extends s.a{constructor(){super(...arguments),this.plugin=null}init(){super.init(),this.plugin=new c}}$plugsy.install(new o)}]);