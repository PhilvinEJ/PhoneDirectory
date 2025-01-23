import React from "react";
import { SvgXml } from "react-native-svg";
import { back, add, backIcon } from "../assets/svg/main";

const IMAGES = { back, add, backIcon };

export type IconsType = "" | "back" | "add" | "backIcon";

/**
 * @param {string} icon Icon name
 * @param {number} height Height of Icon
 * @param {number} width Width of Icon
 * @param {string} color Icon Color
 */

type Props = {
  icon: IconsType;
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
};
const SvgImage = (props: Props) => {
  const { icon, width = 25, height = 25, color, strokeColor } = props;

  const image = IMAGES[icon];

  if (!image) {
    throw new Error(
      `${icon} svg is not added in IMAGES JSON in path > svgIcons/index.js. Please insert icon`
    );
  }

  let updatedSvg = image;

  if (strokeColor) {
    updatedSvg = updatedSvg.replace(
      /stroke="[^"]*"/g,
      `stroke="${strokeColor}"`
    );
  }

  if (color) {
    updatedSvg = updatedSvg.replace(/fill="[^"]*"/g, `fill="${color}"`);
  }

  return <SvgXml xml={updatedSvg} width={width} height={height} />;
};

export default SvgImage;
