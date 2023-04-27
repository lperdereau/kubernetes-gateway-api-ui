import { getAllComponents } from "~/infrastucture/repositories";

export default defineEventHandler(async (event) => {
  return await new (getAllComponents()).HTTPRouteRepository().getAll();
});
