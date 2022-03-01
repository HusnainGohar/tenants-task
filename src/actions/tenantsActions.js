// import axios from 'axios'
import {
    TENANTS_FETCHED,
    TENANTS_ERROR,
} from './actionTypes'
import { tenantsApi } from '../Config'
import {callApi} from "../utils/functions";

export const fetchTenants = () => {
    return dispatch => callApi(tenantsApi)
        .then((data) => {
                dispatch({
                    type: TENANTS_FETCHED,
                    payload: data
                })
            }
        ).catch(error => {
            console.log('error', error)
            dispatch({
                type: TENANTS_ERROR,
                payload: error.response? error.response.data.message : error.message
            })
        })
}