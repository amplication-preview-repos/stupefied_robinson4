import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VirtualMachineWhereUniqueInput } from "../virtualMachine/VirtualMachineWhereUniqueInput";

export type PodmanDeploymentWhereInput = {
  deploymentName?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  virtualMachine?: VirtualMachineWhereUniqueInput;
};
