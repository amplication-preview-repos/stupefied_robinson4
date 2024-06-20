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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PodmanDeploymentUpdateManyWithoutVirtualMachinesInput } from "./PodmanDeploymentUpdateManyWithoutVirtualMachinesInput";
import { Type } from "class-transformer";

@InputType()
class VirtualMachineUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostname?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ipAddress?: string | null;

  @ApiProperty({
    required: false,
    type: () => PodmanDeploymentUpdateManyWithoutVirtualMachinesInput,
  })
  @ValidateNested()
  @Type(() => PodmanDeploymentUpdateManyWithoutVirtualMachinesInput)
  @IsOptional()
  @Field(() => PodmanDeploymentUpdateManyWithoutVirtualMachinesInput, {
    nullable: true,
  })
  podmanDeployments?: PodmanDeploymentUpdateManyWithoutVirtualMachinesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sshKey?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sshUser?: string | null;
}

export { VirtualMachineUpdateInput as VirtualMachineUpdateInput };
