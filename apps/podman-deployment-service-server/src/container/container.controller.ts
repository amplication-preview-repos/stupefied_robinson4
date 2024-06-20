import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContainerService } from "./container.service";
import { ContainerControllerBase } from "./base/container.controller.base";

@swagger.ApiTags("containers")
@common.Controller("containers")
export class ContainerController extends ContainerControllerBase {
  constructor(protected readonly service: ContainerService) {
    super(service);
  }
}
