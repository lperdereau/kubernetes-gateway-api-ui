import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { GatewayRepositoryInterface } from "~/domain/repositories/Gateway.repository.interface";
import GatewayModel from "~/domain/models/GatewayModel.model";

export class GatewayRepository
  extends InMemoryRepository
  implements GatewayRepositoryInterface
{
  getAll(): Promise<GatewayModel[]> {
    return new Promise<GatewayModel[]>((resolve, _): void => {
      resolve(this.gatewayStore);
    });
  }
}
