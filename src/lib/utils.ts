import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IMAGES_CONST } from "@/assets/images";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ProjectImagesList=[
    IMAGES_CONST.OnePng,
    IMAGES_CONST.TwoPng,
    IMAGES_CONST.ThreePng,
    IMAGES_CONST.FourPng,
    IMAGES_CONST.FivePng,
    IMAGES_CONST.SixPng,
    IMAGES_CONST.SevenPng,
    IMAGES_CONST.EightPng,
    IMAGES_CONST.NinePng,
    IMAGES_CONST.TenPng,
    IMAGES_CONST.ElevenPng,
    IMAGES_CONST.TwelvePng,
    IMAGES_CONST.ThirteenPng,
]
