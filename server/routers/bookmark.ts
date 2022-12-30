import { z } from "zod";
import { router, publicProcedure } from "./trpc";

export const bookmarkRouter = router({
  createBookmark: publicProcedure
    .input(
      z.object({
        movieId: z.number(),
        title: z.string(),
        vote_average: z.number(),
        release_date: z.string(),
        poster_path: z.string(),
        type:z.string()
      })
    )
    .mutation(({ input, ctx }) => {
      const userId = ctx?.session?.user?.id;
      if (!ctx.session) {
        throw new Error(
          "You have to be logged in in order to perform this action!"
        );
      }

      return ctx.prisma.bookmark.create({
        data: {
          title: input?.title,
          movieId: input?.movieId,
          poster_path: input?.poster_path,
          vote_average: input?.vote_average,
          release_date: input?.release_date,
          type: input?.type,
          user: {
            connect: {
              id: userId as string,
            },
          },
        },
      });
    }),
  getUserBookmarks: publicProcedure.query(({ ctx }) => {
    const userId = ctx?.session?.user?.id;

    return ctx.prisma.bookmark.findMany({
      where: {
        userId:userId as string
      },
    });
  }),
  deleteBookmark:publicProcedure
    .input(z.object({
      bookmarkId:z.string()
    }))
    .mutation(({ input,ctx })=>{
        return ctx.prisma.bookmark.delete({
          where:{
            id:input.bookmarkId
          }
        })
    })
});
