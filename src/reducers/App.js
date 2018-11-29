const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LIST_TODOS':
      return { ...state, ...payload }

    default:
      return state
  }
}
