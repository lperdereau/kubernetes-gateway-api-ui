import InMemoryRepository from "~/infrastucture/repositories/InMemory/InMemory.repository";
import { HTTPRouteRepositoryInterface } from "~/domain/repositories/HTTPRoute.repository.interface";
import { HTTPRoute } from "~/domain/models/index";

export class HTTPRouteRepository
  extends InMemoryRepository
  implements HTTPRouteRepositoryInterface
{
  getAll(): Promise<HTTPRoute[]> {
    return new Promise<HTTPRoute[]>((resolve, _): void => {
      resolve(this.httpRouteStore);
    });
  }
}
