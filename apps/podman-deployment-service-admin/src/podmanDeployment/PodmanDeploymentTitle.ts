import { PodmanDeployment as TPodmanDeployment } from "../api/podmanDeployment/PodmanDeployment";

export const PODMANDEPLOYMENT_TITLE_FIELD = "deploymentName";

export const PodmanDeploymentTitle = (record: TPodmanDeployment): string => {
  return record.deploymentName?.toString() || String(record.id);
};
