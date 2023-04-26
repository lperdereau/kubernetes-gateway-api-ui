import GatewayClassInterface from "~/domain/models/GatewayClassModel.model";
import { GatewayInterface, Protocol } from "~/domain/models/GatewayModel.model";

export default class InMemoryRepository {
  gatewayClassStore: GatewayClassInterface[] = [
    {
      name: "cilium",
      controller: "io.cilium/gateway-controller",
    },
  ];

  gatewayStore: GatewayInterface[] = [
    {
      name: "default-http",
      gatewayClassName: "cilium",
      listeners: [
        {
          name: "http",
          port: 80,
          protocol: Protocol.HTTP,
        },
        {
          name: "https",
          port: 443,
          protocol: Protocol.HTTPS,
        },
      ],
    },
    {
      name: "least-cost-routing",
      gatewayClassName: "cilium",
      listeners: [
        {
          name: "sip",
          port: 5060,
          protocol: Protocol.UDP,
        },
      ],
    },
  ];
}
