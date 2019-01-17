import { FETCH_USERS_LIST, USERS_FETCHED, FETCHING_USERS } from "../constants/actions";

export const fetchingUsers = () => {
    return {
        type: FETCHING_USERS,
        state: FETCHING_USERS
    }
}

export const usersFetched = (users, state) => {
    return {
        type: USERS_FETCHED,
        users,
        state
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
    
        dispatch(fetchingUsers())
    
        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
    
        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
    
        return fetch(`https://api.github.com/users`)
          .then(
            response => response.json(),
            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895
            error => console.log('An error occurred.', error)
          )
          .then(json =>
            // We can dispatch many times!
            // Here, we update the app state with the results of the API call.
    
            dispatch(usersFetched(json, USERS_FETCHED))
          )
      }
}


