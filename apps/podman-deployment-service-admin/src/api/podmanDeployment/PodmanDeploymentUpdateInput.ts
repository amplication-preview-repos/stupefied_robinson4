import { VirtualMachineWhereUniqueInput } from "../virtualMachine/VirtualMachineWhereUniqueInput";

export type PodmanDeploymentUpdateInput = {
  deploymentName?: string | null;
  status?: "Option1" | null;
  virtualMachine?: VirtualMachineWhereUniqueInput | null;
};
