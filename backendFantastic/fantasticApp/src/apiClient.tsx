import axios from 'axios'

const apiClient = axios.create({
  baseURL:'http://127.0.0.1:8000/' ,
  headers: {
    'Content-type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem('token'))
    console.log(localStorage.getItem('token'), 'token aqui estoy en apiClient');
    
      config.headers.authorization = `JWT ${
       localStorage.getItem('token')
      }`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default apiClient