import { Request, Response } from "express";

const posts = [
  {
    title: "Post1",
  },
  {
    title: "Post2",
  },
  {
    title: "Post3",
  },
];

export const getTodos = (_req: Request, res: Response) => {
  res.json({ posts });
};
