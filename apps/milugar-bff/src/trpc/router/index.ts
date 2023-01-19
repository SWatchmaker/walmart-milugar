import { router } from '..';
import { userRouter } from './users';

export const appRouter = router({
  user: userRouter
});

export type AppRouter = typeof appRouter;