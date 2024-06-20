import { SortOrder } from "../../util/SortOrder";

export type ContainerOrderByInput = {
  containerName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
