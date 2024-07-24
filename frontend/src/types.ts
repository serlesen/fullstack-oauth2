export interface TAppStore {
  authToken: string | null;
}

export interface THttpArgs {
  url: string | URL;
  options?: {
    method?: string;
    body?: string;
    file?: File;
    // eslint-disable-next-line
    headers?: any;
  };
}