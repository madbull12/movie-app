import { z } from 'zod';
import { favouriteRouter } from './favourite';
import { router } from './trpc';

export const appRouter = router({
    favourite:favouriteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;