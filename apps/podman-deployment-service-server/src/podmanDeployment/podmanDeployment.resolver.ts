import * as graphql from "@nestjs/graphql";
import { PodmanDeploymentResolverBase } from "./base/podmanDeployment.resolver.base";
import { PodmanDeployment } from "./base/PodmanDeployment";
import { PodmanDeploymentService } from "./podmanDeployment.service";

@graphql.Resolver(() => PodmanDeployment)
export class PodmanDeploymentResolver extends PodmanDeploymentResolverBase {
  constructor(protected readonly service: PodmanDeploymentService) {
    super(service);
  }
}
