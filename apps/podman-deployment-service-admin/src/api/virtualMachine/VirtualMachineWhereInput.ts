import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PodmanDeploymentListRelationFilter } from "../podmanDeployment/PodmanDeploymentListRelationFilter";

export type VirtualMachineWhereInput = {
  hostname?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  podmanDeployments?: PodmanDeploymentListRelationFilter;
  sshKey?: StringNullableFilter;
  sshUser?: StringNullableFilter;
};
