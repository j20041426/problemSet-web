import axios from 'axios'
axios.defaults.baseURL = '/';
export default {
  getProblemByStatus: params => { return axios.post('getProblemByStatus', params) },
  getProblemByCategory: params => { return axios.post('getProblemByCategory', params) },
  getProblemDetail: params => { return axios.post('getProblemDetail', params) },
}
