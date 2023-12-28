import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { GatewayRepositoryInterface } from "~/domain/repositories/Gateway.repository.interface";
import { Gateway } from "~/domain/models/index";

export class GatewayRepository
  extends InMemoryRepository
  implements GatewayRepositoryInterface
{
  getAll(): Promise<Gateway[]> {
    return new Promise<Gateway[]>((resolve, _): void => {
      resolve(this.gatewayStore);
    });
  }
}
