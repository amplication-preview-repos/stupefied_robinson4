import { PodmanDeployment } from "../podmanDeployment/PodmanDeployment";

export type VirtualMachine = {
  createdAt: Date;
  hostname: string | null;
  id: string;
  ipAddress: string | null;
  podmanDeployments?: Array<PodmanDeployment>;
  sshKey: string | null;
  sshUser: string | null;
  updatedAt: Date;
};
