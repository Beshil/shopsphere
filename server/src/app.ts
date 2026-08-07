import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import { config } from "./config.js";

export const createApp = () => {
  const app = express();
  app.disable("x-powered-by");
  app.use(cors({ origin: config.clientOrigin }));
  app.use(express.json({ limit: "100kb" }));

  app.get("/api/health", (_request, response) => {
    response.json({ status: "ok" });
  });

  app.use((_request, response) => {
    response.status(404).json({ error: "Route not found" });
  });

  const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  };
  app.use(errorHandler);
  return app;
};
