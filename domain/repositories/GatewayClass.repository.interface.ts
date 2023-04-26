import GatewayClassModelInterface from '~/domain/models/GatewayClassModel.model'

export interface GatewayClassRepositoryInterface {
  getAll(): Promise<GatewayClassModelInterface[]>
}
