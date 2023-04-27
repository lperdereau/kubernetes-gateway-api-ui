import { GatewayClass } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/GatewayClass";

export interface GatewayClassRepositoryInterface {
  getAll(): Promise<GatewayClass[]>
}
