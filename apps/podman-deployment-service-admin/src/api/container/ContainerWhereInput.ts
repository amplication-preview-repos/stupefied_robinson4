import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContainerWhereInput = {
  containerName?: StringNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  status?: "Option1";
};
