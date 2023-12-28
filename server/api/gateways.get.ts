import { GatewayRepository } from "~/infrastucture/repositories";

export default defineEventHandler(async (event) => {
  return await new GatewayRepository().getAll();
});
