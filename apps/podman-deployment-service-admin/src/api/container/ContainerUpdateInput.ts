import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContainerUpdateInput = {
  containerName?: string | null;
  image?: ImageWhereUniqueInput | null;
  status?: "Option1" | null;
};
