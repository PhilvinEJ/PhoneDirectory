import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { font, fontSize } from "../../themes/fonts";
import { heightRatio, widthRatio } from "../../utilities/dimensions";

export const styles = StyleSheet.create({
  textFieldContainer: {
    marginTop: 2 * heightRatio,
    borderRadius: 5,
    paddingBottom: 15 * heightRatio,
    width: "100%",
  },
  titleText: {
    color: colors.black2A2A2A,
    fontFamily: font.regular,
    fontSize: fontSize.medium,
    fontWeight: "400",
    marginBottom: 12 * heightRatio,
  },
  inputText: {
    minHeight: 50 * heightRatio,
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 12 * widthRatio,
    paddingVertical: 8 * heightRatio,
    gap: 10,
    borderColor: colors.gray,
    color: colors.black2A2A2A,
    justifyContent: "center",
    alignItems: "center",
    fontSize: fontSize.average,
    backgroundColor: "white",
    fontFamily: font.regular,
    fontWeight: "400",
  },
  inputErrorText: {
    fontFamily: font.light,
    fontSize: fontSize.small,
    color: colors.errorTxt,
    marginTop: 6 * heightRatio,
  },
});
