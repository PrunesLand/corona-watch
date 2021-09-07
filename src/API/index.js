import axios from 'axios'

const API = axios.create({ baseURL: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia' })

export const fetchData = () => API.get('/more')