import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PodmanDeploymentService } from "./podmanDeployment.service";
import { PodmanDeploymentControllerBase } from "./base/podmanDeployment.controller.base";

@swagger.ApiTags("podmanDeployments")
@common.Controller("podmanDeployments")
export class PodmanDeploymentController extends PodmanDeploymentControllerBase {
  constructor(protected readonly service: PodmanDeploymentService) {
    super(service);
  }
}
