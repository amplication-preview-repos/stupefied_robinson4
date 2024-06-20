import { ContainerListRelationFilter } from "../container/ContainerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  containers?: ContainerListRelationFilter;
  id?: StringFilter;
  imageName?: StringNullableFilter;
  repository?: StringNullableFilter;
  tag?: StringNullableFilter;
};
