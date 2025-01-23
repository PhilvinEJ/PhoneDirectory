import {
  ViewStyle,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  View,
  TextInput,
  Text
} from "react-native";
import { colors } from "../../themes/colors";
import { styles } from "./styles";

interface InputProps {
  containerStyle?: ViewStyle;
  value?: any;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  editable?: boolean;
  password?: boolean;
  title?: string;
  textStyle?: StyleProp<TextStyle>;
}

export const PrimaryTextInput = (props: InputProps) => {
  return (
    <View style={[styles.textFieldContainer, props.containerStyle]}>
      <Text style={styles.titleText}>{props.title}</Text>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholderColor}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        value={props.value}
        editable={props.editable}
        onChangeText={(text) => {
          props.onChangeText(text);
        }}
        multiline={props.multiline}
        secureTextEntry={props.password}
        style={[
          styles.inputText,
          props.textStyle,
          props.error && { borderColor: colors.errorTxt },
        ]}
      />
      {props.error !== "" && props.error !== undefined ? (
        <Text style={[styles.inputErrorText]}>{props.error}</Text>
      ) : null}
    </View>
  );
};
