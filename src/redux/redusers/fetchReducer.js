const initState = {
    items : [],
    isLoading : false,
}


export default function fetchReducer(state = initState, action) {
    const {payload, type} = action
    switch (type) {
      case 'GET_ITEMS':
        return {
            ...state,
            items: payload,
            isLoading: true,
        }
      case 'GET_ITEMS_SUCCESS':
        return { 
            ...state,
            items: payload,
            isLoading: false,
        }
      default:
        return state
    }
}
