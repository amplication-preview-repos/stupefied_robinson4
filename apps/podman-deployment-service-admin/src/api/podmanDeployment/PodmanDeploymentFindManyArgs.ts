import { PodmanDeploymentWhereInput } from "./PodmanDeploymentWhereInput";
import { PodmanDeploymentOrderByInput } from "./PodmanDeploymentOrderByInput";

export type PodmanDeploymentFindManyArgs = {
  where?: PodmanDeploymentWhereInput;
  orderBy?: Array<PodmanDeploymentOrderByInput>;
  skip?: number;
  take?: number;
};
