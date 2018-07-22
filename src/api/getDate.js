
import axios from 'axios'
import url from './serviceAPI.config.js'

const http = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970',
  timeout: 10000
})

export const aboutgroups = () => new Promise((resolve, reject) => {
  http.get('fb/about')
      .then(res=> {
          resolve(res.data)
      })
})

export const usersgroups = () => new Promise((resolve, reject) => {
  http.get('fb/users')
  .then((res) => {
    resolve(res.data)
  })
})