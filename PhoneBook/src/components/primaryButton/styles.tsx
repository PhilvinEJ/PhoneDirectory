import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { font, fontSize } from "../../themes/fonts";
import { heightRatio } from "../../utilities/dimensions";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10 * heightRatio,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.regular,
    fontWeight: "500",
    lineHeight: 19,
  },
});
