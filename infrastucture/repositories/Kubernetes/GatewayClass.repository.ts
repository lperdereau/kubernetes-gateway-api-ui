import http from "http";

import { GatewayClassRepositoryInterface } from "~/domain/repositories/GatewayClass.repository.interface";
import KubernetesRepository from "~/infrastucture/repositories/Kubernetes/Kubernetes.repository";
import { GatewayClass } from "~/domain/models/index";

export class GatewayClassRepository
  extends KubernetesRepository
  implements GatewayClassRepositoryInterface
{
  readonly GATEWAY_CLASS_API_GROUP: string = "gateway.networking.k8s.io";
  readonly GATEWAY_CLASS_API_VERSION: string = "v1";
  readonly GATEWAY_CLASS_PLURAL: string = "gatewayclasses";

  getAll(): Promise<GatewayClass[]> {
    return new Promise<GatewayClass[]>((resolve, reject) => {
      this.apiClient
        .listClusterCustomObject(
          this.GATEWAY_CLASS_API_GROUP,
          this.GATEWAY_CLASS_API_VERSION,
          this.GATEWAY_CLASS_PLURAL
        )
        .then((res: { response: http.IncomingMessage; body: any }) => {
          resolve(
            res.body.items.map((item: any) => {
              const obj = new GatewayClass(item);
              obj.validate();
              return obj;
            })
          );
        })
        .catch(reject);
    });
  }
};
