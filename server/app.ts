import express, { Request, Response } from "express";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.json({
    status: "success",
  });
});

export default app;
