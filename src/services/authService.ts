import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../tokens.js";

let refreshTokens: string[] = [];
const EXP_TIME = "15m";

export const generateTokens = (username: any) => {
  const user = { name: username };

  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: EXP_TIME });
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return { accessToken, refreshToken };
};

export const refreshAccessToken = (refreshToken: string) => {
  if (!refreshTokens.includes(refreshToken)) {
    throw new Error("Invalid refresh token");
  }
  const user = jwt.verify(refreshToken, ACCESS_TOKEN_SECRET);

  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: EXP_TIME });
};

export const removeRefreshToken = (refreshToken: string) => {
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
};
