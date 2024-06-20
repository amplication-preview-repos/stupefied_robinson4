import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VirtualMachineService } from "./virtualMachine.service";
import { VirtualMachineControllerBase } from "./base/virtualMachine.controller.base";

@swagger.ApiTags("virtualMachines")
@common.Controller("virtualMachines")
export class VirtualMachineController extends VirtualMachineControllerBase {
  constructor(protected readonly service: VirtualMachineService) {
    super(service);
  }
}
