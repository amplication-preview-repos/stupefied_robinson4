import { Container as TContainer } from "../api/container/Container";

export const CONTAINER_TITLE_FIELD = "containerName";

export const ContainerTitle = (record: TContainer): string => {
  return record.containerName?.toString() || String(record.id);
};
