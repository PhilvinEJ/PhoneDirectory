import { View, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightRatio, widthRatio } from "../../utilities/dimensions";
import styles from "./styles";
import SvgImage from "../../utilities/svgImages";

interface Props {
  isBackIconHidden?: boolean;
  onBackPress?: Function;
  headerText: string;
  isNotificationIconShown?: boolean;
  onNotificationPress?: Function;
  isUnreadNotificationShown?: boolean;
}

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        { marginTop: insets.top + 12 * heightRatio },
      ]}
    >
      {props.isBackIconHidden === true ? (
        <View style={[styles.backContainer]} />
      ) : (
        <TouchableOpacity
          style={[styles.backContainer]}
          onPress={() => {
            props.onBackPress && props.onBackPress();
          }}
        >
          <SvgImage
            icon={'back'}
            width={24 * widthRatio}
            height={24 * widthRatio}
          />
        </TouchableOpacity>
      )}
      <View style={[styles.headerTextContainer]}>
        <Text style={[styles.headerText]}>{props.headerText}</Text>
      </View>
      <View style={[styles.backContainer]} />
    </View>
  );
};

export default Header;
