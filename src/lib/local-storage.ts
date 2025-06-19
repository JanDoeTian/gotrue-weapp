import { isBrowser } from './helpers'
import { SupportedStorage } from './types'
import Taro from '@tarojs/taro'

const localStorageAdapter: SupportedStorage = {
  getItem: (key) => {

    return Taro.getStorageSync(key)
  },
  setItem: (key, value) => {

    Taro.setStorageSync(key, value)
  },
  removeItem: (key) => {

    Taro.removeStorageSync(key)
  },
}

export default localStorageAdapter
