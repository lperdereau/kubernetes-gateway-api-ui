import { GatewayClassRepository as KubernetesGatewayClassRepository } from "~/infrastucture/repositories/Kubernetes/GatewayClass.repository";
import { GatewayClassRepository as InMemoryGatewayClassRepository } from "~/infrastucture/repositories/InMemory/GatewayClass.repository";
import { GatewayRepository as InMemoryGatewayRepository } from "~/infrastucture/repositories/InMemory/Gateway.repository";

export const GatewayClassRepository = InMemoryGatewayClassRepository;
export const GatewayRepository = InMemoryGatewayRepository;
