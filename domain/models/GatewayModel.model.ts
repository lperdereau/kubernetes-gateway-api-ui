export interface GatewayInterface {
  name?: string;
  gatewayClassName?: GatewayClassName;
  listeners: Listener[];
  addresses?: Address[];
}

export default class GatewayModel implements GatewayInterface {
  name?: string;
  gatewayClassName?: GatewayClassName;
  listeners: Listener[] = [];
  addresses?: Address[] = [];
}

export enum Protocol {
  HTTP,
  HTTPS,
  TCP,
  UDP,
  TLS,
}

export type Listener = {
  name: string;
  port: number;
  protocol: Protocol;
  hostname?: string;
};

type AddressType = string;
type GatewayClassName = string;

type Address = {
  type: AddressType;
  value: string;
};
