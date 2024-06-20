import { VirtualMachine } from "../virtualMachine/VirtualMachine";

export type PodmanDeployment = {
  createdAt: Date;
  deploymentName: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  virtualMachine?: VirtualMachine | null;
};
