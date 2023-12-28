import { GatewayClass } from "~/domain/models/index";

export interface GatewayClassRepositoryInterface {
  getAll(): Promise<GatewayClass[]>
}
