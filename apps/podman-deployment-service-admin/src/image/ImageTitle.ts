import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "imageName";

export const ImageTitle = (record: TImage): string => {
  return record.imageName?.toString() || String(record.id);
};
