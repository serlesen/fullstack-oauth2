import { action } from "mobx";
import AppStore from "src/AppStore";

export const AppActions = {
    setAuthToken: action((token: string): void => {
      AppStore.authToken = token;
      localStorage.setItem("token", token);
    }),
    getLocalStorageAuthToken: action((): boolean => {
      const token = localStorage.getItem("token");

      if (!token) {
        return false;
      }
      AppActions.setAuthToken(token);
      return true;
    }),
};

export default AppActions;