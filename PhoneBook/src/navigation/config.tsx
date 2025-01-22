import { colors } from "../themes/colors";

const navigationConfig = {
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  animation: "slide_from_right",
};

export default navigationConfig;

export type RootStackParamList = {
  Home: undefined;
};
