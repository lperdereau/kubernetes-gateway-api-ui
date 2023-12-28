import http from "http";
import { HTTPRouteRepositoryInterface } from "~/domain/repositories/HTTPRoute.repository.interface";
import KubernetesRepository from "~/infrastucture/repositories/Kubernetes/Kubernetes.repository";
import { HTTPRoute } from "~/domain/models/index";

export class HTTPRouteRepository
  extends KubernetesRepository
  implements HTTPRouteRepositoryInterface
{
  readonly HTTP_ROUTES_API_GROUP: string = "gateway.networking.k8s.io";
  readonly HTTP_ROUTES_API_VERSION: string = "v1";
  readonly HTTP_ROUTES_PLURAL: string = "httproutes";

  getAll(): Promise<HTTPRoute[]> {
    return new Promise<HTTPRoute[]>((resolve, reject) => {
      this.apiClient
        .listClusterCustomObject(
          this.HTTP_ROUTES_API_GROUP,
          this.HTTP_ROUTES_API_VERSION,
          this.HTTP_ROUTES_PLURAL
        )
        .then((res: { response: http.IncomingMessage; body: any }) => {
          resolve(
            res.body.items.map((item: any) => {
              const obj = new HTTPRoute(item);
              obj.validate();
              return obj;
            })
          );
        })
        .catch(reject);
    });
  }
};
