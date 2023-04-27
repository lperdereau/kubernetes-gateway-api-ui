import { GatewayClassRepository as KubernetesGatewayClassRepository } from "~/infrastucture/repositories/Kubernetes/GatewayClass.repository";
import { GatewayRepository as KubernetesGatewaRepository } from "~/infrastucture/repositories/Kubernetes/Gateway.repository";

import { GatewayClassRepository as InMemoryGatewayClassRepository } from "~/infrastucture/repositories/InMemory/GatewayClass.repository";
import { GatewayRepository as InMemoryGatewaRepository } from "~/infrastucture/repositories/InMemory/Gateway.repository";

// export const GatewayClassRepository = InMemoryGatewayClassRepository;
// export const GatewayRepository = InMemoryGatewaRepository;

export const GatewayClassRepository = KubernetesGatewayClassRepository;
export const GatewayRepository = KubernetesGatewaRepository;
