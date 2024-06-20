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
import { ContainerUpdateManyWithoutImagesInput } from "./ContainerUpdateManyWithoutImagesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ImageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ContainerUpdateManyWithoutImagesInput,
  })
  @ValidateNested()
  @Type(() => ContainerUpdateManyWithoutImagesInput)
  @IsOptional()
  @Field(() => ContainerUpdateManyWithoutImagesInput, {
    nullable: true,
  })
  containers?: ContainerUpdateManyWithoutImagesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  repository?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tag?: string | null;
}

export { ImageUpdateInput as ImageUpdateInput };
