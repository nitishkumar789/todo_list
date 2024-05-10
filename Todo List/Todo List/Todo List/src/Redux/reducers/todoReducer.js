import { actionTypes } from './action';
const initState = [];
export const reducer = (state = initState, action) => {
   console.log(action, "reducer *******") 
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return [...state, action.payload]
    }
    case actionTypes.DELETE_TODO: {
      return state.filter((item) => item?.id !== action.payload)
    }
    case actionTypes.UPDATE_TODO: {
      return state.map((item) => item.id === action.payload.id ? { ...item, text: action.payload.text } : item)
    }
    default: {
      return state;
    }
  }
};
