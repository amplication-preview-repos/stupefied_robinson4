import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageName?: SortOrder;
  repository?: SortOrder;
  tag?: SortOrder;
  updatedAt?: SortOrder;
};
