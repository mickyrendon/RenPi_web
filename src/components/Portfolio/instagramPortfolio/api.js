// import axios from '../node_modules/axios/dist/axios.min.js'
import axios from 'axios'
// migracion a axios
export const api = axios.create({
    baseURL: 'https://graph.instagram.com/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      accept: 'application/json',
      Authorization: 'IGAAcGmhquDBVBZAE11eWltaXFuaUJSc1E3MzNjbzVPSkxUU3k1WHlvSncxOUkzTWpzYm9ZAOTVBX3lsWnBYUElsNS1xU0xJSjNTaXlnemdFNGZA2elF6ZAmh4UWFrS2dMTWpxNm9WTGxrb0o5cGtFXzNIdkxKSHA4TFZAZARGQzOW9KWQZDZD'
    },
    params: {
      // 'api-key': '?api_key=38d8dd67d0503c7b3179fefed4f58607',
      'language': '&language=es-CH'
    }
  })