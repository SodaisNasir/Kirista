export const LOGIN = 'LOGIN';
export const SPLASH_SCREEN = 'SPLASH_SCREEN';
export const IS_GUEST = 'IS_GUEST';
export const USER_DETAILS = 'USER_DETAILS'
export const OTP_SEND = 'OTP_SEND'
export const MODE = 'MODE'
export const CHAPTERS = 'CHAPTERS'


const initialState = {
  userEmail: null,
  perishData: [],
  splash_screen: null,
  is_guest: false,
  user_details: null,
  otp: null,
mode: null,
chapters: [],
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
      case USER_DETAILS:
        return {
          ...state,
          user_details: action.payload,
        }
          case OTP_SEND:
            return {
              ...state,
              otp: action.payload,
            }
          case MODE:
            return {
              ...state,
              mode: action.payload,
            }
          case CHAPTERS:
            return {
              ...state,
              chapters: action.payload,
            }

    default:
      return state;
  }
};
