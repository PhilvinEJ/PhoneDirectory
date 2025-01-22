import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { font, fontSize } from "../../themes/fonts";
import { widthRatio } from "../../utilities/dimensions";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backContainer: {
    height: 24 * widthRatio,
    width: "10%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerTextContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: colors.black2A2A2A,
    fontFamily: font.medium,
    fontSize: fontSize.size24,
    lineHeight: 30,
  },
  notificationContainer: {
    height: 24 * widthRatio,
    width: "10%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default styles;
