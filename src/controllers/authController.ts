import { Request, Response } from "express";
import { generateTokens, refreshAccessToken, removeRefreshToken } from "../services/authService.js";

export const login = (req: Request, res: Response) => {
  const username = req.body.username;
  const { accessToken, refreshToken } = generateTokens(username);
  res.json({ accessToken, refreshToken });
};

export const refreshToken = (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  const accessToken = refreshAccessToken(refreshToken);
  res.json({ accessToken });
};

export const logout = (req: Request, res: Response) => {
  const refreshToken = req.body.refresh_token;
  removeRefreshToken(refreshToken);
  res.sendStatus(204);
};
