import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
    // 获取地址
    async getAddress ({commit,state}) {
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqAddress(geohash)
      if (result.code===0) {
          const address =result.data
          commit(RECEIVE_ADDRESS,{address})
      }
    },
     // 获取食品分类列表
    async getCategorys ({commit}) {
      const result = await reqFoodCategorys()
      if (result.code===0) {
          const categorys =result.data
          commit(RECEIVE_CATEGORYS,{categorys})
      }
    },
    // 获取商家列表
    async getShops ({commit,state}) {
      const {longitude,latitude} = state
      const result = await reqShops(longitude,latitude)
      if (result.code===0) {
          const shops =result.data
          commit(RECEIVE_SHOPS,{shops})
      }
    }
}
