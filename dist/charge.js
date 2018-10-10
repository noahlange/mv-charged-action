/*!
 * Plugin enabling variable-duration skill charges.
 *   Loosely patterned off of Victor Sant's ChargeActions plugin.
 *   You'll need to have Plugsy installed in order to use this plugin.
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Plugin; });\n/* harmony import */ var plugsy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plugsy */ \"plugsy\");\n/* harmony import */ var plugsy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plugsy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_ChargePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ChargePlugin */ \"./src/lib/ChargePlugin.ts\");\n\n\nclass Plugin extends plugsy__WEBPACK_IMPORTED_MODULE_0___default.a {\n    constructor() {\n        super(...arguments);\n        this.plugin = null;\n    }\n    init() {\n        super.init();\n        this.plugin = new _lib_ChargePlugin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n}\n$plugsy.install(new Plugin());\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFPLFNBQVEsTUFBTTtJQUExQzs7UUFDUyxXQUFNLEdBQXdCLElBQUksQ0FBQztJQUs1QyxDQUFDO0lBSlEsSUFBSTtRQUNULEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/ChargeManager.ts":
/*!**********************************!*\
  !*** ./src/lib/ChargeManager.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChargeManager; });\nclass ChargeManager {\n    constructor(plugin, battler) {\n        this.current = null;\n        this.plugin = plugin;\n        this.battler = battler;\n    }\n    updateAction() {\n        if (this.current) {\n            if (!this.battler.currentAction()) {\n                this.current.turns--;\n            }\n            if (this.current.turns <= 0) {\n                this.executeAction();\n            }\n        }\n    }\n    executeAction() {\n        if (this.current) {\n            const action = new Game_Action(this.battler, false);\n            // @ts-ignore\n            action._targetIndex = this.current.index;\n            action.setSkill(this.current.skill);\n            this.battler.setAction(0, action);\n        }\n    }\n    createAction(action, notetag) {\n        const id = action.item().id;\n        let turns = 1;\n        if (this.hasTurns(notetag)) {\n            turns = notetag.turns;\n        }\n        if (this.hasFormula(notetag)) {\n            const fn = (ChargeManager.functions[id] =\n                id in ChargeManager.functions\n                    ? ChargeManager.functions[id]\n                    : new Function('i', 'a', 'v', `return ${notetag.formula}`));\n            // @ts-ignore\n            turns = fn(action.item(), this.battler, $gameVariables);\n        }\n        this.current = {\n            // @ts-ignore\n            index: action._targetIndex,\n            skill: id,\n            state: notetag.state,\n            turns: turns + 1,\n        };\n        if (this.current.state) {\n            this.battler.addNewState(this.current.state);\n        }\n    }\n    destroyAction() {\n        if (this.current && this.current.state) {\n            this.battler.eraseState(this.current.state);\n        }\n        this.current = null;\n    }\n    hasTurns(notetag) {\n        return 'turns' in notetag;\n    }\n    hasFormula(notetag) {\n        return 'formula' in notetag;\n    }\n}\nChargeManager.functions = {};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJnZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFhO0lBT2hDLFlBQW1CLE1BQW9CLEVBQUUsT0FBcUI7UUFGdkQsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFHekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEQsYUFBYTtZQUNiLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTSxZQUFZLENBQUMsTUFBbUIsRUFBRSxPQUE0QjtRQUNuRSxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxQixNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxFQUFFLElBQUksYUFBYSxDQUFDLFNBQVM7b0JBQzNCLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFjLENBQUMsQ0FBQztZQUM3RSxhQUFhO1lBQ2IsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixhQUFhO1lBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQzFCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQztTQUNqQixDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRVMsUUFBUSxDQUFDLE9BQTRCO1FBQzdDLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRVMsVUFBVSxDQUFDLE9BQTRCO1FBQy9DLE9BQU8sU0FBUyxJQUFJLE9BQU8sQ0FBQztJQUM5QixDQUFDOztBQTFFYSx1QkFBUyxHQUE4QixFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/lib/ChargeManager.ts?");

/***/ }),

/***/ "./src/lib/ChargePlugin.ts":
/*!*********************************!*\
  !*** ./src/lib/ChargePlugin.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChargePlugin; });\n/* harmony import */ var plugsy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plugsy */ \"plugsy\");\n/* harmony import */ var plugsy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plugsy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ChargeManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChargeManager */ \"./src/lib/ChargeManager.ts\");\n\n\nclass ChargePlugin {\n    constructor() {\n        this.tagged = {};\n        this.charges = new Map();\n        this.canInput = (battler, old) => {\n            const charge = this.charges.get(battler);\n            return charge ? old() && !charge.current : old();\n        };\n        this.performChargeAction = (_log, _fn, actor, action) => {\n            const manager = this.charges.get(actor);\n            if (manager && !manager.current) {\n                const res = this.getAction(action.item().id);\n                if (res) {\n                    manager.createAction(action, res);\n                }\n            }\n            BattleManager._targets = [];\n        };\n        this.startAction = (log, startAction, actor, action, targets) => {\n            const manager = this.charges.get(actor);\n            const charge = this.getAction(action.item().id);\n            if (manager && charge && !manager.current) {\n                log.push('performChargeAction', actor, action);\n                if (charge.message) {\n                    log.push('addText', actor.name() + charge.message.format(action.item().name));\n                }\n            }\n            else {\n                startAction(actor, action, targets);\n            }\n        };\n        this.endAction = (_log, end, actor) => {\n            const manager = this.charges.get(actor);\n            if (manager && manager.current && manager.current.turns <= 0) {\n                manager.destroyAction();\n            }\n            end(actor);\n        };\n        this.startBattle = (_manager, start, ...args) => {\n            this.clear();\n            const party = $gameParty.members();\n            const troop = $gameTroop.members();\n            for (const arr of [party, troop]) {\n                for (const battler of arr) {\n                    this.charges.set(battler, new _ChargeManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, battler));\n                }\n            }\n            start(...args);\n        };\n        this.processTurn = (bm, turn) => {\n            const actor = bm._subject;\n            const manager = this.charges.get(actor);\n            if (manager && manager.current) {\n                manager.updateAction();\n            }\n            turn();\n        };\n        this.useItem = (obj, orig, item) => {\n            const charge = this.charges.get(obj);\n            if (!charge || !charge.current) {\n                orig(item);\n            }\n        };\n        const skills = $plugsy.notetags.$dataSkills;\n        const items = $plugsy.notetags.$dataItems;\n        for (const hash of [skills, items]) {\n            for (const key in hash) {\n                if (hash.hasOwnProperty(key)) {\n                    const nt = hash[key];\n                    if (this.isChargeNotetag(nt)) {\n                        this.tagged[key] = nt.Charge || nt.charge;\n                    }\n                }\n            }\n        }\n        this.shim();\n    }\n    clear() {\n        this.charges = new Map();\n    }\n    getAction(id) {\n        const tagged = this.tagged[id];\n        return tagged ? tagged || null : null;\n    }\n    shim() {\n        Object(plugsy__WEBPACK_IMPORTED_MODULE_0__[\"shimmer\"])(Game_BattlerBase.prototype, {\n            canInput: this.canInput\n        });\n        Object(plugsy__WEBPACK_IMPORTED_MODULE_0__[\"shimmer\"])(Game_Battler.prototype, {\n            useItem: this.useItem\n        });\n        Object(plugsy__WEBPACK_IMPORTED_MODULE_0__[\"shimmer\"])(Window_BattleLog.prototype, {\n            endAction: this.endAction,\n            // @ts-ignore\n            performChargeAction: this.performChargeAction,\n            startAction: this.startAction\n        });\n        Object(plugsy__WEBPACK_IMPORTED_MODULE_0__[\"shimmer\"])(BattleManager, {\n            processTurn: this.processTurn,\n            startBattle: this.startBattle\n        });\n    }\n    isChargeNotetag(notetag) {\n        if ('Charge' in notetag || 'charge' in notetag) {\n            return true;\n        }\n        return false;\n    }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlUGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmdlUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHakMsT0FBTyxhQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxZQUFZO0lBSS9CO1FBSE8sV0FBTSxHQUFpRCxFQUFFLENBQUM7UUFDMUQsWUFBTyxHQUF5QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBMkIxRCxhQUFRLEdBQUcsQ0FDaEIsT0FBeUIsRUFDekIsR0FBa0IsRUFDVCxFQUFFO1lBQ1gsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDO1FBRUssd0JBQW1CLEdBQUcsQ0FDM0IsSUFBc0IsRUFDdEIsR0FBVSxFQUNWLEtBQW1CLEVBQ25CLE1BQW1CLEVBQ2IsRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1lBQ0QsYUFBYSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBRUssZ0JBQVcsR0FBRyxDQUNuQixHQUFxQixFQUNyQixXQUlTLEVBQ1QsS0FBbUIsRUFDbkIsTUFBbUIsRUFDbkIsT0FBdUIsRUFDakIsRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQ04sU0FBUyxFQUNULEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3pELENBQUM7aUJBQ0g7YUFDRjtpQkFBTTtnQkFDTCxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQztRQUVLLGNBQVMsR0FBRyxDQUNqQixJQUFzQixFQUN0QixHQUFrQyxFQUNsQyxLQUFtQixFQUNiLEVBQUU7WUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDNUQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUssZ0JBQVcsR0FBRyxDQUNuQixRQUE2QixFQUM3QixLQUErQixFQUMvQixHQUFHLElBQVcsRUFDUixFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxLQUFLLE1BQU0sT0FBTyxJQUFJLEdBQUcsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO1lBQ0QsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDO1FBRUssZ0JBQVcsR0FBRyxDQUFDLEVBQXVCLEVBQUUsSUFBZ0IsRUFBUSxFQUFFO1lBQ3ZFLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUM7UUFFSyxZQUFPLEdBQUcsQ0FDZixHQUFpQixFQUNqQixJQUFvQyxFQUNwQyxJQUFvQixFQUNwQixFQUFFO1lBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNaO1FBQ0gsQ0FBQyxDQUFDO1FBeEhBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzVDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzFDLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUMzQztpQkFDRjthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sU0FBUyxDQUFDLEVBQVU7UUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFvR00sSUFBSTtRQUNULE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhO1lBQ2IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxlQUFlLENBQ3BCLE9BQTRCO1FBRTVCLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRiJ9\n\n//# sourceURL=webpack:///./src/lib/ChargePlugin.ts?");

/***/ }),

/***/ "plugsy":
/*!*************************!*\
  !*** external "plugsy" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = plugsy;\n\n//# sourceURL=webpack:///external_%22plugsy%22?");

/***/ })

/******/ });