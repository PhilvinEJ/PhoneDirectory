import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { heightRatio, widthRatio } from "../../utilities/dimensions";
import { fontSize, font } from "../../themes/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
  },
  searchTextInput: {
    flexGrow: 1,
    marginHorizontal: 16 * widthRatio,
  },
  addContactButtonContainer: {
    position: "absolute",
    bottom: 24 * widthRatio,
    right: 24 * widthRatio,
    padding: 12 * widthRatio,
    borderRadius: 50,
    backgroundColor: colors.black,
  },
  boxElevationStyle: {
    backgroundColor: colors.white,
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 }, // Increase the height to make the shadow longer
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15, // Increase the elevation to make the shadow more pronounced on Android}
  },
  flatListStyle: {
    marginHorizontal: 16 * widthRatio,
    paddingBottom: 24 * heightRatio,
  },
  emptyListContainer: {
    minHeight: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    color: colors.black2A2A2A,
    fontSize: fontSize.medium,
    fontFamily: font.regular,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "center",
  },
});

export default styles;
