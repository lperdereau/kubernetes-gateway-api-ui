import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { GatewayClassRepositoryInterface } from "~/domain/repositories/GatewayClass.repository.interface";
import { GatewayClass } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/GatewayClass";

export class GatewayClassRepository
  extends InMemoryRepository
  implements GatewayClassRepositoryInterface
{
  getAll(): Promise<GatewayClass[]> {
    return new Promise<GatewayClass[]>((resolve, _): void => {
      resolve(this.gatewayClassStore);
    });
  }
}
