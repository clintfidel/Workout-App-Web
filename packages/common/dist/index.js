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
var Routes_1 = require("./Routes");
exports.App = mobx_react_lite_1.observer(function () {
    var counterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Routes_1.Routes, null))));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    },
    wrapper: {
        width: '100%',
        flex: 1,
        maxWidth: 425,
        backgroundColor: '#F5FCFF'
    }
});
