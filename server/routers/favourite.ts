import { z } from "zod";
import { router, publicProcedure } from "./trpc";

export const favouriteRouter = router({
  createFavourite: publicProcedure
    .input(
      z.object({
        movieId: z.number(),
        title: z.string(),
        vote_average: z.number(),
        release_date: z.string(),
        poster_path: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const userId = ctx?.session?.user?.id;
      if (!ctx.session) {
        throw new Error(
          "You have to be logged in in order to perform this action!"
        );
      }

      return ctx.prisma.favourite.create({
        data: {
          title: input?.title,
          movieId: input?.movieId,
          poster_path: input?.poster_path,
          vote_average: input?.vote_average,
          release_date: input?.release_date,
          user: {
            connect: {
              id: userId as string,
            },
          },
        },
      });
    }),
  getUserFavourites: publicProcedure.query(({ ctx }) => {
    const userId = ctx?.session?.user?.id;

    return ctx.prisma.favourite.findMany({
      where: {
        userId:userId as string
      },
    });
  }),
});
