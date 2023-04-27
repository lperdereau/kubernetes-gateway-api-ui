import { Gateway } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/Gateway";
import { GatewayClass } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/GatewayClass";

export default class InMemoryRepository {
  gatewayClassStore: GatewayClass[] = [
    new GatewayClass({
      metadata: {
        name: "cilium",
      },
      spec: {
        controllerName: "io.cilium/gateway-controller",
      },
    }),
  ];

  gatewayStore: Gateway[] = [
    new Gateway({
      metadata: {
        name: "default-http",
      },
      spec: {
        gatewayClassName: "cilium",
        listeners: [
          {
            name: "http",
            port: 80,
            protocol: "HTTP",
          },
          {
            name: "https",
            port: 443,
            protocol: "HTTPS",
          },
        ],
      },
    }),
    new Gateway({
      metadata: {
        name: "least-cost-routing",
      },
      spec: {
        gatewayClassName: "cilium",
        listeners: [
          {
            name: "sip",
            port: 5060,
            protocol: "UDP",
          },
        ],
      },
    }),
  ];
}
