import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { GatewayClassRepositoryInterface } from "~/domain/repositories/GatewayClass.repository.interface";
import GatewayClassModel from "~/domain/models/GatewayClassModel.model";

export class GatewayClassRepository
  extends InMemoryRepository
  implements GatewayClassRepositoryInterface
{
  getAll(): Promise<GatewayClassModel[]> {
    return new Promise<GatewayClassModel[]>((resolve, _): void => {
      resolve(this.gatewayClassStore);
    });
  }
}
