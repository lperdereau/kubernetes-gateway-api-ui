import { HTTPRoute } from "~/domain/models/index";


export interface HTTPRouteRepositoryInterface {
  getAll(): Promise<HTTPRoute[]>
}
