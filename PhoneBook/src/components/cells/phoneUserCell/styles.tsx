import { StyleSheet } from "react-native";
import { heightRatio } from "../../../utilities/dimensions";
import { colors } from "../../../themes/colors";
import { font, fontSize } from "../../../themes/fonts";

const styles = StyleSheet.create({
  cellContainer: {
    marginTop: 10 * heightRatio,
    marginBottom: 5 * heightRatio,
  },
  contactNameText: {
    color: colors.black2A2A2A,
    fontFamily: font.medium,
    fontSize: fontSize.veryLarge,
    marginBottom: 5 * heightRatio,
  },
  contactNumberText: {
    color: colors.black2A2A2A,
    fontFamily: font.medium,
    fontSize: fontSize.large,
    marginBottom: 7 * heightRatio,
  },
  contactCityText: {
    color: colors.black2A2A2A,
    fontFamily: font.medium,
    fontSize: fontSize.medium,
    marginBottom: 5 * heightRatio,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    width: "100%",
    marginTop: 5 * heightRatio,
  }
});

export default styles;
