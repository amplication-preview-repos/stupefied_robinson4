/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VirtualMachineService } from "../virtualMachine.service";
import { VirtualMachineCreateInput } from "./VirtualMachineCreateInput";
import { VirtualMachine } from "./VirtualMachine";
import { VirtualMachineFindManyArgs } from "./VirtualMachineFindManyArgs";
import { VirtualMachineWhereUniqueInput } from "./VirtualMachineWhereUniqueInput";
import { VirtualMachineUpdateInput } from "./VirtualMachineUpdateInput";
import { PodmanDeploymentFindManyArgs } from "../../podmanDeployment/base/PodmanDeploymentFindManyArgs";
import { PodmanDeployment } from "../../podmanDeployment/base/PodmanDeployment";
import { PodmanDeploymentWhereUniqueInput } from "../../podmanDeployment/base/PodmanDeploymentWhereUniqueInput";

export class VirtualMachineControllerBase {
  constructor(protected readonly service: VirtualMachineService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VirtualMachine })
  async createVirtualMachine(
    @common.Body() data: VirtualMachineCreateInput
  ): Promise<VirtualMachine> {
    return await this.service.createVirtualMachine({
      data: data,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        ipAddress: true,
        sshKey: true,
        sshUser: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VirtualMachine] })
  @ApiNestedQuery(VirtualMachineFindManyArgs)
  async virtualMachines(
    @common.Req() request: Request
  ): Promise<VirtualMachine[]> {
    const args = plainToClass(VirtualMachineFindManyArgs, request.query);
    return this.service.virtualMachines({
      ...args,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        ipAddress: true,
        sshKey: true,
        sshUser: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VirtualMachine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async virtualMachine(
    @common.Param() params: VirtualMachineWhereUniqueInput
  ): Promise<VirtualMachine | null> {
    const result = await this.service.virtualMachine({
      where: params,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        ipAddress: true,
        sshKey: true,
        sshUser: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VirtualMachine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVirtualMachine(
    @common.Param() params: VirtualMachineWhereUniqueInput,
    @common.Body() data: VirtualMachineUpdateInput
  ): Promise<VirtualMachine | null> {
    try {
      return await this.service.updateVirtualMachine({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hostname: true,
          id: true,
          ipAddress: true,
          sshKey: true,
          sshUser: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VirtualMachine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVirtualMachine(
    @common.Param() params: VirtualMachineWhereUniqueInput
  ): Promise<VirtualMachine | null> {
    try {
      return await this.service.deleteVirtualMachine({
        where: params,
        select: {
          createdAt: true,
          hostname: true,
          id: true,
          ipAddress: true,
          sshKey: true,
          sshUser: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/podmanDeployments")
  @ApiNestedQuery(PodmanDeploymentFindManyArgs)
  async findPodmanDeployments(
    @common.Req() request: Request,
    @common.Param() params: VirtualMachineWhereUniqueInput
  ): Promise<PodmanDeployment[]> {
    const query = plainToClass(PodmanDeploymentFindManyArgs, request.query);
    const results = await this.service.findPodmanDeployments(params.id, {
      ...query,
      select: {
        createdAt: true,
        deploymentName: true,
        id: true,
        status: true,
        updatedAt: true,

        virtualMachine: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/podmanDeployments")
  async connectPodmanDeployments(
    @common.Param() params: VirtualMachineWhereUniqueInput,
    @common.Body() body: PodmanDeploymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      podmanDeployments: {
        connect: body,
      },
    };
    await this.service.updateVirtualMachine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/podmanDeployments")
  async updatePodmanDeployments(
    @common.Param() params: VirtualMachineWhereUniqueInput,
    @common.Body() body: PodmanDeploymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      podmanDeployments: {
        set: body,
      },
    };
    await this.service.updateVirtualMachine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/podmanDeployments")
  async disconnectPodmanDeployments(
    @common.Param() params: VirtualMachineWhereUniqueInput,
    @common.Body() body: PodmanDeploymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      podmanDeployments: {
        disconnect: body,
      },
    };
    await this.service.updateVirtualMachine({
      where: params,
      data,
      select: { id: true },
    });
  }
}
