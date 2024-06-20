import { VirtualMachineWhereInput } from "./VirtualMachineWhereInput";
import { VirtualMachineOrderByInput } from "./VirtualMachineOrderByInput";

export type VirtualMachineFindManyArgs = {
  where?: VirtualMachineWhereInput;
  orderBy?: Array<VirtualMachineOrderByInput>;
  skip?: number;
  take?: number;
};
