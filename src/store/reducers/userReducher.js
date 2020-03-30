import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILED,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILED
} from "../actions/userAction";

const initState = {
  userList: [],
  specificUser: {
    id: undefined,
    name: "",
    nationId: "",
    addess: ""
  },
  requestSuccess: false,
  requestFailed: false,
  syncNeeded: false,
  gridDataloading: false
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        syncNeeded: false,
        gridDataloading: true
      };
    case USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        requestSuccess: true,
        requestFailed: false,
        syncNeeded: false,
        gridDataloading: false
      };
    case USER_FAILED:
      return {
        ...state,
        requestSuccess: false,
        requestFailed: false,
        syncNeeded: false,
        gridDataloading: false
      };
    case USER_CREATE_REQUEST:
      return {
        ...state,
        syncNeeded: false,
        gridDataloading: false
      };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        requestSuccess: true,
        requestFailed: false,
        syncNeeded: true,
        gridDataloading: false
      };
    case USER_CREATE_FAILED:
      return {
        ...state,
        success: false,
        requestSuccess: false,
        requestFailed: false,
        syncNeeded: false,
        gridDataloading: false
      };
    default:
      return state;
  }
};

export default UserReducer;
