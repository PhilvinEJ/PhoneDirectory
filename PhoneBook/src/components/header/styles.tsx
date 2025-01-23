import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { font, fontSize } from "../../themes/fonts";
import { heightRatio, widthRatio } from "../../utilities/dimensions";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12 * heightRatio,
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
});

export default styles;
