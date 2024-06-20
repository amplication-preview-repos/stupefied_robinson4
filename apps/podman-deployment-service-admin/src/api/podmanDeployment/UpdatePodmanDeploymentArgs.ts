import { PodmanDeploymentWhereUniqueInput } from "./PodmanDeploymentWhereUniqueInput";
import { PodmanDeploymentUpdateInput } from "./PodmanDeploymentUpdateInput";

export type UpdatePodmanDeploymentArgs = {
  where: PodmanDeploymentWhereUniqueInput;
  data: PodmanDeploymentUpdateInput;
};
