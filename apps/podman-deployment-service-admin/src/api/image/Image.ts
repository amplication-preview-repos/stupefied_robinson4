import { Container } from "../container/Container";

export type Image = {
  containers?: Array<Container>;
  createdAt: Date;
  id: string;
  imageName: string | null;
  repository: string | null;
  tag: string | null;
  updatedAt: Date;
};
