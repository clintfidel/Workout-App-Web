"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var RouterStore_1 = require("./stores/RouterStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var WorkoutHistory_1 = require("./stores/components/WorkoutHistory");
var CurrentWorkout_1 = require("./stores/components/CurrentWorkout");
exports.Routes = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return (routerStore.screen === 'WorkoutHistory' ?
        react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null) : react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null));
});
