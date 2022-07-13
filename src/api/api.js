import axios from 'axios'

export const getData = () => {
    debugger
    return axios.get('https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json')
}