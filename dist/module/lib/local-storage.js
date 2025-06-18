import { isBrowser } from './helpers';
import Taro from '@tarojs/taro';
const localStorageAdapter = {
    getItem: (key) => {
        if (!isBrowser()) {
            return null;
        }
        return Taro.getStorageSync(key);
    },
    setItem: (key, value) => {
        if (!isBrowser()) {
            return;
        }
        Taro.setStorageSync(key, value);
    },
    removeItem: (key) => {
        if (!isBrowser()) {
            return;
        }
        Taro.removeStorageSync(key);
    },
};
export default localStorageAdapter;
//# sourceMappingURL=local-storage.js.map