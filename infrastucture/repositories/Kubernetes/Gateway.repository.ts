import http from "http";
import { GatewayRepositoryInterface } from "~/domain/repositories/Gateway.repository.interface";
import KubernetesRepository from "~/infrastucture/repositories/Kubernetes/Kubernetes.repository";
import { Gateway } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/Gateway";

class GatewayRepository
  extends KubernetesRepository
  implements GatewayRepositoryInterface
{
  readonly GATEWAY_API_GROUP: string = "gateway.networking.k8s.io";
  readonly GATEWAY_API_VERSION: string = "v1alpha2";
  readonly GATEWAY_PLURAL: string = "gateways";

  getAll(): Promise<Gateway[]> {
    return new Promise<Gateway[]>((resolve, reject) => {
      this.apiClient
        .listClusterCustomObject(
          this.GATEWAY_API_GROUP,
          this.GATEWAY_API_VERSION,
          this.GATEWAY_PLURAL
        )
        .then((res: { response: http.IncomingMessage; body: any }) => {
          resolve(
            res.body.items.map((item: any) => {
              const obj = new Gateway(item);
              obj.validate();
              return obj;
            })
          );
        })
        .catch(reject);
    });
  }
}

export { GatewayRepository };
