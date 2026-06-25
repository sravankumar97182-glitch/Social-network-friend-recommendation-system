export interface IAuthPayload {
  userId: string;
  email: string;
  role: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IDecodedToken extends IAuthPayload {
  iat: number;
  exp: number;
}
