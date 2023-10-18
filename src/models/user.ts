export interface User {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    deleted?: boolean;
    accessToken?: string;
  }
  