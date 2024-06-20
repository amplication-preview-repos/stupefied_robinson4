import { Module } from "@nestjs/common";
import { PodmanDeploymentModuleBase } from "./base/podmanDeployment.module.base";
import { PodmanDeploymentService } from "./podmanDeployment.service";
import { PodmanDeploymentController } from "./podmanDeployment.controller";
import { PodmanDeploymentResolver } from "./podmanDeployment.resolver";

@Module({
  imports: [PodmanDeploymentModuleBase],
  controllers: [PodmanDeploymentController],
  providers: [PodmanDeploymentService, PodmanDeploymentResolver],
  exports: [PodmanDeploymentService],
})
export class PodmanDeploymentModule {}
