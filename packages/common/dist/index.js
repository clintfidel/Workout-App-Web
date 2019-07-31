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
var mobx_react_lite_1 = require("mobx-react-lite");
var CounterStore_1 = require("./stores/CounterStore");
var react_native_1 = require("react-native");
exports.App = mobx_react_lite_1.observer(function () {
    var counterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.people }, counterStore.count),
        react_1.default.createElement(react_native_1.Button, { title: 'count', onPress: function () { return counterStore.count++; } })));
});
var styles = react_native_1.StyleSheet.create({
    people: {
        fontSize: 24,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
