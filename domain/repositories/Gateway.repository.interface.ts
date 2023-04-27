import { Gateway } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/Gateway";


export interface GatewayRepositoryInterface {
  getAll(): Promise<Gateway[]>
}
