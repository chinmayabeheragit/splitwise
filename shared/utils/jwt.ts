import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

export const signToken = (
  payload: string | object | Buffer,
  secret: string,
  options?: SignOptions
): string => {
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (
  token: string,
  secret: string
): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};
