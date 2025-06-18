"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const taro_1 = __importDefault(require("@tarojs/taro"));
const localStorageAdapter = {
    getItem: (key) => {
        if (!(0, helpers_1.isBrowser)()) {
            return null;
        }
        return taro_1.default.getStorageSync(key);
    },
    setItem: (key, value) => {
        if (!(0, helpers_1.isBrowser)()) {
            return;
        }
        taro_1.default.setStorageSync(key, value);
    },
    removeItem: (key) => {
        if (!(0, helpers_1.isBrowser)()) {
            return;
        }
        taro_1.default.removeStorageSync(key);
    },
};
exports.default = localStorageAdapter;
//# sourceMappingURL=local-storage.js.map