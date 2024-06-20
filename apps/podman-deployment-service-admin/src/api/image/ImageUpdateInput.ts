import { ContainerUpdateManyWithoutImagesInput } from "./ContainerUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  containers?: ContainerUpdateManyWithoutImagesInput;
  imageName?: string | null;
  repository?: string | null;
  tag?: string | null;
};
