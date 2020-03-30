import { put, takeLatest, call } from "redux-saga/effects";
import { getUser, getUserbyId } from "../../../services.crud/userService";

export const actionTypes = {
  UserGetRequested: "[UserGetRequested] Action",
  UserGetSucceed: "[UserGetSucceed] Action",
  UserGetSucceed: "[UserGetSucceed] Action",
  UserGetByIdRequest: "[UserGetByIdRequest] Action",
  UserGetByIdSucceed: "[UserGetByIdSucceed] Action",
  UserGetByIdFailed: "[UserGetByIdFailed] Action"
};

const userState = {
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

export const reducer = (state = userState, action) => {
  switch (action.type) {
    case actionTypes.UserGetRequested: {
      //console.log("red UserGetRequested=> ", action);

      return {
        ...state,
        userList: [],
        isGridLoading: true
      };
    }
    case actionTypes.UserGetSucceed: {
      //console.log("red UserGetSucceed=> ", action);
      return { userList: action.data, isGridLoading: false };
    }
    case actionTypes.UserGetSucceed: {
      //console.log("red UserGetSucceed=> ", action.data);
      return { ...state, isGridLoading: false };
    }
    case actionTypes.UserGetByIdRequest: {
      //console.log("red UserGetByIdRequest=> ", action);

      return {
        ...state,
        specificUser: { ...userState.specificUser },
        isSendRequest: true
      };
    }
    case actionTypes.UserGetByIdSucceed: {
      //console.log("red UserGetByIdSucceed=> ", action);
      return { ...state, specificUser: action.data, isSendRequest: false };
    }
    case actionTypes.UserGetByIdFailed: {
      //console.log("red UserGetByIdFailed=> ", action);
      return { ...state, isSendRequest: false };
    }
    default:
      return state;
  }
};

export const actions = {
  userGetRequested: () => ({
    type: actionTypes.UserGetRequested
  }),
  userGetSucceed: data => ({
    type: actionTypes.UserGetSucceed,
    data: data
  }),
  userGetSucceed: () => ({ type: actionTypes.UserGetSucceed }),

  userGetByIdRequest: userId => ({
    type: actionTypes.UserGetByIdRequest,
    userId: userId
  }),
  userGetByIdSucceed: data => ({
    type: actionTypes.UserGetByIdSucceed,
    data: data
  }),
  userGetByIdFailed: () => ({
    type: actionTypes.UserGetByIdFailed
  })
};

export function* saga() {
  try {
    //console.log("saga getWithPagination");
    yield takeLatest(actionTypes.UserGetRequested, function* userRequested(
      action
    ) {
      //console.log("saga takeLatest=> ", action);
      const { response, error } = yield getUser();

      //console.log("getWithPagination after request back=> ", response);
      if (response) {
        yield put(actions.UserGetSucceed(response.data));
      } else {
        yield put(actions.UserGetSucceed(error));
      }
    });
  } catch (error) {
    yield put(actions.UserGetSucceed(error));
  }

  try {
    //console.log("saga UserGetByIdRequest");
    yield takeLatest(actionTypes.UserGetByIdRequest, function* userRequested(
      action
    ) {
      //console.log("saga profileRequested => ", action.userId);

      if (action.userId !== undefined && action.userId !== null) {
        const { response, error } = yield call(() =>
          getUserbyId(action.userId)
        );

        if (response) {
          yield put(actions.UserGetByIdSucceed(response.data));
        } else {
          yield put(actions.UserGetByIdFailed(error));
        }
      } else {
        const actionData = { ...userState.specificUser };
        yield put(actions.UserGetByIdSucceed(actionData));
      }
    });
  } catch (error) {
    yield put(actions.UserGetByIdFailed(error));
  }
}
