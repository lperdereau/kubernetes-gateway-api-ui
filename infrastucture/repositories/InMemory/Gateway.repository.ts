import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { GatewayRepositoryInterface } from "~/domain/repositories/Gateway.repository.interface";
import { Gateway } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/Gateway";

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
