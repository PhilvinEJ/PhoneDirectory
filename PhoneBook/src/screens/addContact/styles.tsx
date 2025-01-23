import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { heightRatio, widthRatio } from "../../utilities/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16 * widthRatio,
  },
  input: {
    marginBottom: 12 * heightRatio
  },
  button: {
    backgroundColor: colors.black,
    paddingVertical: 15 * heightRatio,
    marginTop: 20 * heightRatio,
  },
});

export default styles;
