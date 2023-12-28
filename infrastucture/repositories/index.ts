import { GatewayClassRepository as KubernetesGatewayClassRepository } from "~/infrastucture/repositories/Kubernetes/GatewayClass.repository";
import { GatewayRepository as KubernetesGatewaRepository } from "~/infrastucture/repositories/Kubernetes/Gateway.repository";
import { HTTPRouteRepository as KubernetesHTTPRouteRepository } from "~/infrastucture/repositories/Kubernetes/HTTPRoute.repository";

import { GatewayClassRepository as InMemoryGatewayClassRepository } from "~/infrastucture/repositories/InMemory/GatewayClass.repository";
import { GatewayRepository as InMemoryGatewaRepository } from "~/infrastucture/repositories/InMemory/Gateway.repository";
import { HTTPRouteRepository as InMemoryHTTPRouteRepository } from "~/infrastucture/repositories/InMemory/HTTPRoute.repository";

const is_demo = useRuntimeConfig().demo;

export const GatewayClassRepository = is_demo
  ? InMemoryGatewayClassRepository
  : KubernetesGatewayClassRepository;
export const GatewayRepository = is_demo
  ? InMemoryGatewaRepository
  : KubernetesGatewaRepository;
export const HTTPRouteRepository = is_demo
  ? InMemoryHTTPRouteRepository
  : KubernetesHTTPRouteRepository;
