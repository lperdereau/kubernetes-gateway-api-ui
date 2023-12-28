import { HTTPRouteRepository } from "~/infrastucture/repositories";

export default defineEventHandler(async (event) => {
  return await new HTTPRouteRepository().getAll();
});
