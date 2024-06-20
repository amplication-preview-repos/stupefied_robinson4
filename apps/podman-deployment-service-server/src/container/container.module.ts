import { Module } from "@nestjs/common";
import { ContainerModuleBase } from "./base/container.module.base";
import { ContainerService } from "./container.service";
import { ContainerController } from "./container.controller";
import { ContainerResolver } from "./container.resolver";

@Module({
  imports: [ContainerModuleBase],
  controllers: [ContainerController],
  providers: [ContainerService, ContainerResolver],
  exports: [ContainerService],
})
export class ContainerModule {}
