/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumContainerStatus } from "./EnumContainerStatus";

@InputType()
class ContainerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  containerName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageWhereUniqueInput, {
    nullable: true,
  })
  image?: ImageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumContainerStatus,
  })
  @IsEnum(EnumContainerStatus)
  @IsOptional()
  @Field(() => EnumContainerStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ContainerCreateInput as ContainerCreateInput };
