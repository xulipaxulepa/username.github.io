import axios from 'axios'

import {BASE_URL, API_KEY} from '../enviroments/enviroment'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().quadrinhos.description
        const search = description ? description : ''
        if(search == ''){
            const request = axios.get(`${BASE_URL}comics?apikey=${API_KEY}`)
            .then(resp => dispatch({type: 'quadrinhos_SEARCHED', payload: resp.data.data.results}))
        } else {
            const request = axios.get(`${BASE_URL}comics?title=${search}&apikey=${API_KEY}`)
            .then(resp => dispatch({type: 'quadrinhos_SEARCHED', payload: resp.data.data.results}))
        }
        
    }
}

export const clear = () => {
    return [{ type: 'quadrinhos_CLEAR' }, search()]
}