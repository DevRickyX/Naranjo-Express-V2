import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { formSchema } from "@/server/api/routers/form/schemas";

const formRouter = createTRPCRouter({
  submit: publicProcedure.input(formSchema).mutation(({ input }) => {
    return {
      data: input,
    };
  }),
});

export default formRouter;
