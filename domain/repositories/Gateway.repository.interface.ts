import GatewayModelInterface from '~/domain/models/GatewayModel.model'

export interface GatewayRepositoryInterface {
  getAll(): Promise<GatewayModelInterface[]>
}
