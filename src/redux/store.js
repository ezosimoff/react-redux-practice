import {createStore} from 'redux';

function fetchReduser(state = { value: 0 }, action) {
    switch (action.type) {
      case 'GET_ITEMS':
        return { value: state.value + 1 }
      case 'GET_CATS':
        return { value: state.value - 1 }
      default:
        return state
    }
}

export const store = createStore(fetchReduser)