const initialState = { lawyers: [], news: [], orders: [], docs: [] }

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LAWYERS': {
      return { ...state, lawyers: action.payload }
    }

    case 'VALIDATE_LAWYER': {
      const index = state.lawyers.findIndex(item => item.id === action.payload.id)
      state.lawyers.splice(index, 1, action.payload)

      return state
    }

    case 'GET_NEWS': {
      return { ...state, news: action.payload }
    }

    case 'UPDATE_NEWS': {
      const news = state.news.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload
        }

        return item
      })

      return { ...state, news }
    }

    case 'ACTIVATE_NEWS': {
      const index = state.news.findIndex(item => item.id === action.payload.id)
      state.news.splice(index, 1, action.payload)

      return state
    }

    case 'REMOVE_NEWS': {
      const index = state.news.findIndex(item => item.id === action.payload)
      state.news.splice(index, 1)

      return state
    }

    case 'CREATE_NEWS': {
      state.news.push(action.payload)

      return state
    }

    case 'GET_ALL_ORDERS': {
      return { ...state, orders: action.payload }
    }

    case 'DELETE_ORDER': {
      return { ...state, orders: state.orders.filter(el => el.id !== Number(action.payload) )}
    }

    case 'SHOW_DOCS': {
      return { ...state, docs: action.payload }
    }

    default: {
      return state
    }
  }
}
