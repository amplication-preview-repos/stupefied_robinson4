import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContainerCreateInput = {
  containerName?: string | null;
  image?: ImageWhereUniqueInput | null;
  status?: "Option1" | null;
};
