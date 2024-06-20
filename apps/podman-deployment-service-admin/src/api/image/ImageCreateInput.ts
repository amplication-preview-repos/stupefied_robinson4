import { ContainerCreateNestedManyWithoutImagesInput } from "./ContainerCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  containers?: ContainerCreateNestedManyWithoutImagesInput;
  imageName?: string | null;
  repository?: string | null;
  tag?: string | null;
};
