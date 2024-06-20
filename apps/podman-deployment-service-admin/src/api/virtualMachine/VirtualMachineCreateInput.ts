import { PodmanDeploymentCreateNestedManyWithoutVirtualMachinesInput } from "./PodmanDeploymentCreateNestedManyWithoutVirtualMachinesInput";

export type VirtualMachineCreateInput = {
  hostname?: string | null;
  ipAddress?: string | null;
  podmanDeployments?: PodmanDeploymentCreateNestedManyWithoutVirtualMachinesInput;
  sshKey?: string | null;
  sshUser?: string | null;
};
