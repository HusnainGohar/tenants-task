import {
    TENANTS_FETCHED,
    TENANTS_ERROR,
} from '../actions/actionTypes'

const initialState = {
    msg: '',
    tenants: [],
    count: 0,
    error: ''
}
export default function colorReducer (state = initialState, action) {
    const { type, payload } = action
    switch (type) {

        case TENANTS_FETCHED:
            return {
                ...state,
                tenants: payload,
                count: payload.length,
                error: ''
            }

        case TENANTS_ERROR:
            return {
                ...state,
                tenants: []
            }

        default:
            return {
                ...state
            }
    }
}