import { VirtualMachine as TVirtualMachine } from "../api/virtualMachine/VirtualMachine";

export const VIRTUALMACHINE_TITLE_FIELD = "hostname";

export const VirtualMachineTitle = (record: TVirtualMachine): string => {
  return record.hostname?.toString() || String(record.id);
};
