export const LOGIN = 'LOGIN';
export const SPLASH_SCREEN = 'SPLASH_SCREEN';
export const IS_GUEST = 'IS_GUEST';

const initialState = {
  userEmail: null,
  perishData: [],
  splash_screen: null,
  is_guest: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userEmail: action.payload,
      };
    case SPLASH_SCREEN:
      return {
        ...state,
        splash_screen: action.payload,
      };
    case IS_GUEST:
      return {
        ...state,
        is_guest: action.payload,
      };

    default:
      return state;
  }
};
