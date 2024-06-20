import * as graphql from "@nestjs/graphql";
import { VirtualMachineResolverBase } from "./base/virtualMachine.resolver.base";
import { VirtualMachine } from "./base/VirtualMachine";
import { VirtualMachineService } from "./virtualMachine.service";

@graphql.Resolver(() => VirtualMachine)
export class VirtualMachineResolver extends VirtualMachineResolverBase {
  constructor(protected readonly service: VirtualMachineService) {
    super(service);
  }
}
