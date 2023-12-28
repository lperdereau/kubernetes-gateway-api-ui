import { Gateway } from "~/domain/models/index";


export interface GatewayRepositoryInterface {
  getAll(): Promise<Gateway[]>
}
