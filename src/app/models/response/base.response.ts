export interface BaseResponse {
  statusCode?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  message?: string | Array<string>;
  error?: string;
}

export interface BaseError {
  statusCode: number;
  message: string | Array<string>;
  error: string | BaseResponseData;
}

export interface BaseResponseData {
  errors: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inner: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}
