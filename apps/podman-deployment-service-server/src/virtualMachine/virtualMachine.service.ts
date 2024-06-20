import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VirtualMachineServiceBase } from "./base/virtualMachine.service.base";

@Injectable()
export class VirtualMachineService extends VirtualMachineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
