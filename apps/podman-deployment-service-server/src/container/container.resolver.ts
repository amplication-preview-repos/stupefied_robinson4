import * as graphql from "@nestjs/graphql";
import { ContainerResolverBase } from "./base/container.resolver.base";
import { Container } from "./base/Container";
import { ContainerService } from "./container.service";

@graphql.Resolver(() => Container)
export class ContainerResolver extends ContainerResolverBase {
  constructor(protected readonly service: ContainerService) {
    super(service);
  }
}
