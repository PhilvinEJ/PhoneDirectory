import { Dimensions } from "react-native";
const dWidth = Dimensions.get("window").width;
const dHeight = Dimensions.get("window").height;

export const Dimension = {
  width: dWidth,
  height: dHeight,
};

export const heightRatio = dHeight / 812;
export const widthRatio = dWidth / 390;
