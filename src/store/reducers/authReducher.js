import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from "../actions/authAction";

const auth = JSON.parse(localStorage.getItem("auth"));

const initState = auth
  ? {
      userName: auth.user.userName,
      loginaId: auth.user.loginaId,
      isLoggedIn: true,
      loggingRequest: false,
      loginFailed: false,
      authToken: auth.token
    }
  : {
      userName: "",
      loginaId: null,
      isLoggedIn: false,
      loggingRequest: false,
      loginFailed: false,
      authToken: ""
    };

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginFailed: false,
        loggingRequest: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        loginId: action.payload.user.loginId,
        isLoggedIn: true,
        loginFailed: false,
        loggingRequest: false,
        authToken: action.payload.token
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userName: "",
        loginaId: null,
        isLoggedIn: false,
        loggingRequest: false,
        loginFailed: false,
        authToken: ""
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userName: "",
        loginaId: null,
        isLoggedIn: false,
        loggingRequest: false,
        loginFailed: false,
        authToken: ""
      };
    default:
      return state;
  }
};

export default AuthReducer;
