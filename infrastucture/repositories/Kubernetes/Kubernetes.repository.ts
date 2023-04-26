import * as k8s from "@kubernetes/client-node";

class KubernetesRepository {
  apiClient: any;

  constructor() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    this.apiClient = kc.makeApiClient(k8s.CustomObjectsApi);
  }
}

export default KubernetesRepository;
