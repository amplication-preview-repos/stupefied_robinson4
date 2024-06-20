import { Image } from "../image/Image";

export type Container = {
  containerName: string | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
