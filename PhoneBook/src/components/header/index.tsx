import {
  View,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
  TextInput,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightRatio, widthRatio } from "../../utilities/dimensions";
import styles from "./styles";
import SvgImage from "../../utilities/svgImages";
import { colors } from "../../themes/colors";

interface HeaderProps {
  isBackIconHidden?: boolean;
  onBackPress?: Function;
  headerText: string;
  isNotificationIconShown?: boolean;
  onNotificationPress?: Function;
  isUnreadNotificationShown?: boolean;
}

export const Header = (props: HeaderProps) => {
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
            icon={"backIcon"}
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

interface SearchHeaderProps {
  value?: any;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
}

export const SearchHeader = (props: SearchHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        props.containerStyle,
        { marginTop: insets.top + 12 * heightRatio },
      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholderColor}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(text) => {
          props.onChangeText(text);
        }}
        style={[
          styles.inputText,
          props.textStyle,
          props.error && { borderColor: colors.errorTxt },
        ]}
      />
    </View>
  );
};
