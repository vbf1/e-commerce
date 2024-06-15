import { router } from "../trpc";
import { aiportRouter } from "./aiport/_aiport";

export const appRouter = router({
  aiport: aiportRouter,
});

export type AppRouter = typeof appRouter;
