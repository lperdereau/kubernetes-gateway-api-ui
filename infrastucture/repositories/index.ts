import { GatewayClassRepository as KubernetesGatewayClassRepository } from "~/infrastucture/repositories/Kubernetes/GatewayClass.repository";
import { GatewayRepository as KubernetesGatewaRepository } from "~/infrastucture/repositories/Kubernetes/Gateway.repository";
import { HTTPRouteRepository as KubernetesHTTPRouteRepository } from "~/infrastucture/repositories/Kubernetes/HTTPRoute.repository";

import { GatewayClassRepository as InMemoryGatewayClassRepository } from "~/infrastucture/repositories/InMemory/GatewayClass.repository";
import { GatewayRepository as InMemoryGatewaRepository } from "~/infrastucture/repositories/InMemory/Gateway.repository";
import { HTTPRouteRepository as InMemoryHTTPRouteRepository } from "~/infrastucture/repositories/InMemory/HTTPRoute.repository";

interface Module {
  GatewayClassRepository: any;
  GatewayRepository: any;
  HTTPRouteRepository: any;
}

export function getAllComponents(): Module {
  if (useRuntimeConfig().demo) {
    return {
      GatewayClassRepository: InMemoryGatewayClassRepository,
      GatewayRepository: InMemoryGatewaRepository,
      HTTPRouteRepository: InMemoryHTTPRouteRepository,
    };
  } else {
    return {
      GatewayClassRepository: KubernetesGatewayClassRepository,
      GatewayRepository: KubernetesGatewaRepository,
      HTTPRouteRepository: KubernetesHTTPRouteRepository,
    };
  }
}
