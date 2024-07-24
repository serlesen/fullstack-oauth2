import { observable } from "mobx";
import { TAppStore } from "./types";

export const AppStore: TAppStore = observable({
  authToken: null,
});

export default AppStore;
