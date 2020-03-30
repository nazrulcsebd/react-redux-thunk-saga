import * as httpRequest from "../store/reduck/loaderDucks/requestLoader.duck";

export function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const {
        auth: { authToken }
      } = store.getState();

      console.log("axois authToken=> ", authToken);
      console.log("axois interceptors=> ", store.getState());

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      store.dispatch(httpRequest.actions.startRequest(true));
      return config;
    },
    err => Promise.reject(err)
  );
  axios.interceptors.response.use(
    response => {
      store.dispatch(httpRequest.actions.endRequest(false));
      return response;
    },
    err => Promise.reject(err)
  );
}
