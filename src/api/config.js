import axios from 'axios'

const isEnvProduction = process.env.NODE_ENV === 'production'

const instance = axios.create({
  baseURL: isEnvProduction ? '' : '/'
})

instance.interceptors.request.use(
  config => {
    return config;
  }
)

instance.interceptors.response.use(
  res => {
    console.log(res.data)
    return res;
  },
  err => {
    return err;
  }
)

export default instance;