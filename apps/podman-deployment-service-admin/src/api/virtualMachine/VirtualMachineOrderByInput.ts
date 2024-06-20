import { SortOrder } from "../../util/SortOrder";

export type VirtualMachineOrderByInput = {
  createdAt?: SortOrder;
  hostname?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  sshKey?: SortOrder;
  sshUser?: SortOrder;
  updatedAt?: SortOrder;
};
