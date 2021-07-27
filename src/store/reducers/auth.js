import  {RU, KG, EN}  from "../actions/auth"
import {data} from "../data"

const initialState = {
  data: data.ru,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case RU:
      return {
        ...state,
        data: data.ru,
      };

    case KG:
      return {
        ...state,
        data: data.kg,
      };

    case EN:
      return {
        ...state,
        data: data.en,
      };

    default:
      return state;
  }
};