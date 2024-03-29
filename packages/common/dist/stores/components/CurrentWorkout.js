"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RouterStore_1 = require("../RouterStore");
exports.CurrentWorkout = function () {
    var routerStore = React.useContext(RouterStore_1.RouterStoreContext);
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "My workouts"),
        React.createElement(react_native_1.Button, { title: 'create workout', onPress: function () { return routerStore.screen = "WorkoutHistory"; } })));
};
