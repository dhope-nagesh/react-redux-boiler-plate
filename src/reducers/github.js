import { FETCH_USERS_LIST, USERS_FETCHED, FETCHING_USERS } from "../constants/actions";

const initialState = {
    users: [],
    state: USERS_FETCHED
}

export default (state = initialState, action) => {
    const { type, ...payload } = action;
    console.log(action)
    switch (type) {

        case FETCHING_USERS:
            console.log(payload)
            return { ...state, ...payload }
        case USERS_FETCHED:
            return { ...state, ...payload }

        default:
            return state
    }
}
