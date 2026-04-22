import { StaticImageData } from "next/image";

export interface ImageType {
  src: StaticImageData;
  alt: string;
  tooltipLabel: string;
}
