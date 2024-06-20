import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PodmanDeploymentServiceBase } from "./base/podmanDeployment.service.base";

@Injectable()
export class PodmanDeploymentService extends PodmanDeploymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
