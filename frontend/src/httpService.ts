import { THttpArgs } from "./types";
import AppStore from "./AppStore";
import AppActions from "./AppActions";

export const httpService = {
    fetch: async ({ url, options }: THttpArgs): Promise<any> => {
        return await fetch(`http://localhost:8080${url}`, options);
    },
    fetchWithAuth: async ({ url, options }: THttpArgs): Promise<any> => {
        AppActions.getLocalStorageAuthToken();
        const optionsWithAuth = {
          ...options,
          headers: {
            ...options?.headers,
            Authorization: `Bearer ${AppStore.authToken}`,
          },
        };
        return await fetch(`http://localhost:8080${url}`, optionsWithAuth);
    }
};

export default httpService;