import http from "http";

import GatewayClassModel from "~/domain/models/GatewayClassModel.model";
import { GatewayClassRepositoryInterface } from "~/domain/repositories/GatewayClass.repository.interface";
import KubernetesRepository from "~/infrastucture/repositories/Kubernetes/Kubernetes.repository";

class GatewayClassRepository
  extends KubernetesRepository
  implements GatewayClassRepositoryInterface
{
  readonly GATEWAY_CLASS_API_GROUP: string = "gateway.networking.k8s.io";
  readonly GATEWAY_CLASS_API_VERSION: string = "v1beta1";
  readonly GATEWAY_CLASS_PLURAL: string = "gatewayclasses";

  getAll(): Promise<GatewayClassModel[]> {
    return new Promise<GatewayClassModel[]>((resolve, reject) => {
      this.apiClient
        .listClusterCustomObject(
          this.GATEWAY_CLASS_API_GROUP,
          this.GATEWAY_CLASS_API_VERSION,
          this.GATEWAY_CLASS_PLURAL
        )
        .then((res: { response: http.IncomingMessage; body: any }) => {
          resolve(
            res.body.items.map((item: any) => {
              return {
                name: item.metadata.name,
                controller: item.spec.controllerName,
              };
            })
          );
        })
        .catch(reject);
    });
  }
}

export { GatewayClassRepository };
