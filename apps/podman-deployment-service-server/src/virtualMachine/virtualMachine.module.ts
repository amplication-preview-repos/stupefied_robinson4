import { Module } from "@nestjs/common";
import { VirtualMachineModuleBase } from "./base/virtualMachine.module.base";
import { VirtualMachineService } from "./virtualMachine.service";
import { VirtualMachineController } from "./virtualMachine.controller";
import { VirtualMachineResolver } from "./virtualMachine.resolver";

@Module({
  imports: [VirtualMachineModuleBase],
  controllers: [VirtualMachineController],
  providers: [VirtualMachineService, VirtualMachineResolver],
  exports: [VirtualMachineService],
})
export class VirtualMachineModule {}
