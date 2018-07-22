import * as types from './mutations.types'
import api from '@/api/index'

export default {
    UserLogin ({ commit }, data) {
        commit (types.LOGIN, data)
    },
    Userlogout ({ commit }) {
        commit (types.LOGOUT)
    },
    UserName ({ commit }, data) {
        commit (types.USERNAME, data)
    }
}