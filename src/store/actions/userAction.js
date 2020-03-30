import UserService from "../../services.crud/userService";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILED = "USER_FAILED";

export const USER_CREATE_REQUEST = "USER_CREATE_REQUEST";
export const USER_CREATE_SUCCESS = "USER_CREATE_SUCCESS";
export const USER_CREATE_FAILED = "USER_CREATE_FAILED";

export const requestUser = () => {
  return dispatch => {
    dispatch({
      type: USER_REQUEST
    });

    UserService.getUser()
      .then(res => {
        dispatch({
          type: USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: USER_FAILED
        });
      });
  };
};

export const createUser = user => {
  return dispatch => {
    dispatch({
      type: USER_CREATE_REQUEST
    });
    UserService.createUser(user)
      .then(res => {
        dispatch({
          type: USER_CREATE_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: USER_CREATE_FAILED
        });
      });
  };
};
