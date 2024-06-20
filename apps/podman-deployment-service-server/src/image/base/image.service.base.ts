/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Image as PrismaImage,
  Container as PrismaContainer,
} from "@prisma/client";

export class ImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ImageCountArgs, "select">): Promise<number> {
    return this.prisma.image.count(args);
  }

  async images(args: Prisma.ImageFindManyArgs): Promise<PrismaImage[]> {
    return this.prisma.image.findMany(args);
  }
  async image(args: Prisma.ImageFindUniqueArgs): Promise<PrismaImage | null> {
    return this.prisma.image.findUnique(args);
  }
  async createImage(args: Prisma.ImageCreateArgs): Promise<PrismaImage> {
    return this.prisma.image.create(args);
  }
  async updateImage(args: Prisma.ImageUpdateArgs): Promise<PrismaImage> {
    return this.prisma.image.update(args);
  }
  async deleteImage(args: Prisma.ImageDeleteArgs): Promise<PrismaImage> {
    return this.prisma.image.delete(args);
  }

  async findContainers(
    parentId: string,
    args: Prisma.ContainerFindManyArgs
  ): Promise<PrismaContainer[]> {
    return this.prisma.image
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .containers(args);
  }
}
