import { SortOrder } from "../../util/SortOrder";

export type PodmanDeploymentOrderByInput = {
  createdAt?: SortOrder;
  deploymentName?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  virtualMachineId?: SortOrder;
};
