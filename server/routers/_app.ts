import { z } from 'zod';
import { bookmarkRouter } from './bookmark';
import { favouriteRouter } from './favourite';
import { router } from './trpc';

export const appRouter = router({
    favourite:favouriteRouter,
    bookmark:bookmarkRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;