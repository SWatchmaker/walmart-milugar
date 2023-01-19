import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { appRouter } from './trpc/router';
import { createContext } from './trpc';
import * as trpcExpress from '@trpc/server/adapters/express';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});