import AuthService from "../../services.crud/authService";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loginRequest = credential => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });
    AuthService.login(credential)
      .then(res => {
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("auth");
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
};
