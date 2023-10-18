export interface ApiResponse<T=object,E=object> {
    statusCode?: number;
    data?: T;
    message?: string | Array<string>;
    error?: E;
  }