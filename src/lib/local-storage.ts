import { isBrowser } from './helpers'
import { SupportedStorage } from './types'
import Taro from '@tarojs/taro';

const localStorageAdapter: SupportedStorage = {
  getItem: (key) => {
    if (!isBrowser()) {
      return null
    }

    return Taro.getStorageSync(key)
  },
  setItem: (key, value) => {
    if (!isBrowser()) {
      return
    }

    Taro.setStorageSync(key, value)
  },
  removeItem: (key) => {
    if (!isBrowser()) {
      return
    }

    Taro.removeStorageSync(key)
  },
}

export default localStorageAdapter
