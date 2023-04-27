import { Gateway, HTTPRoute, GatewayClass } from "~/domain/models/index";

export default class InMemoryRepository {
  gatewayClassStore: GatewayClass[] = [
    new GatewayClass({
      metadata: {
        name: "gw-class",
        namespace: "default",
      },
      spec: {
        controllerName: "konghq.com/kic-gateway-controller",
      },
    }),
  ];

  gatewayStore: Gateway[] = [
    new Gateway({
      metadata: {
        name: "gateway-lperdereau",
        namespace: "default",
      },
      spec: {
        gatewayClassName: "gw-class",
        addresses: [
          {
            type: "IPAddress",
            value: "127.0.0.1",
          },
        ],
        listeners: [
          {
            allowedRoutes: {
              namespaces: {
                from: "All",
              },
            },
            name: "portal-http",
            port: 80,
            protocol: "HTTP",
            hostname: "portal.lperdereau.dev",
          },
          {
            allowedRoutes: {
              namespaces: {
                from: "All",
              },
            },
            name: "portal-https",
            port: 443,
            protocol: "HTTPS",
            hostname: "portal.lperdereau.dev",
          },
          {
            allowedRoutes: {
              namespaces: {
                from: "Same",
              },
            },
            name: "api-http",
            port: 80,
            protocol: "HTTP",
            hostname: "api.lperdereau.dev",
          },
          {
            allowedRoutes: {
              namespaces: {
                from: "Same",
              },
            },
            name: "api-https",
            port: 443,
            protocol: "HTTPS",
            hostname: "api.lperdereau.dev",
          },
          {
            allowedRoutes: {
              namespaces: {
                from: "Same",
              },
            },
            name: "dns",
            port: 53,
            protocol: "UDP",
          },
        ],
      },
    }),
  ];

  httpRouteStore: HTTPRoute[] = [
    new HTTPRoute({
      metadata: {
        name: "httproute-portal",
        namespace: "default",
      },
      spec: {
        hostnames: ["portal.lperdereau.dev"],
        rules: [
          {
            matches: [
              {
                path: {
                  type: "PathPrefix",
                  value: "/",
                },
              },
            ],
            backendRefs: [
              {
                name: "my-app",
                port: 80,
              },
            ],
          },
        ],
      },
    }),
    new HTTPRoute({
      metadata: {
        name: "httproute-api",
        namespace: "default",
      },
      spec: {
        hostnames: ["api.lperdereau.dev"],
        rules: [
          {
            matches: [
              {
                path: {
                  type: "PathPrefix",
                  value: "/api",
                },
              },
            ],
            backendRefs: [
              {
                name: "my-app",
                port: 80,
              },
            ],
          },
        ],
      },
    }),
  ];
}
