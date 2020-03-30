export const actionTypes = {
  StartRequest: "[StartRequest] HttpStart",
  EndRequest: "[CreateRequested] HttpEnd"
};

const httpState = {
  requestCount: 0,
  isHttpRequestLoading: false
};

export const reducer = (state = httpState, action) => {
  switch (action.type) {
    case actionTypes.StartRequest: {
      return {
        isHttpRequestLoading: action.requestStatus,
        requestCount: ++state.requestCount
      };
    }
    case actionTypes.EndRequest: {
      return {
        requestCount: --state.requestCount,
        isHttpRequestLoading: state.requestCount > 0
      };
    }
    default: {
      return state;
    }
  }
};

export const actions = {
  startRequest: requestStatus => ({
    type: actionTypes.StartRequest,
    requestStatus: requestStatus
  }),
  endRequest: requestStatus => ({
    type: actionTypes.EndRequest,
    requestStatus: requestStatus
  })
};
