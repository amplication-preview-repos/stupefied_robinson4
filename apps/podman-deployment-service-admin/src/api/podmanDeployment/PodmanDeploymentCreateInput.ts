import { VirtualMachineWhereUniqueInput } from "../virtualMachine/VirtualMachineWhereUniqueInput";

export type PodmanDeploymentCreateInput = {
  deploymentName?: string | null;
  status?: "Option1" | null;
  virtualMachine?: VirtualMachineWhereUniqueInput | null;
};
