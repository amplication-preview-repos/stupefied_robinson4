import { PodmanDeploymentUpdateManyWithoutVirtualMachinesInput } from "./PodmanDeploymentUpdateManyWithoutVirtualMachinesInput";

export type VirtualMachineUpdateInput = {
  hostname?: string | null;
  ipAddress?: string | null;
  podmanDeployments?: PodmanDeploymentUpdateManyWithoutVirtualMachinesInput;
  sshKey?: string | null;
  sshUser?: string | null;
};
