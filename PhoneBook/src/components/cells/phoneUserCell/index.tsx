import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { PhoneCellModel } from "../../../data/models/PhoneCellModel";

export interface PhoneUserCellProps {
  index: number;
  item: PhoneCellModel;
}

const PhoneUserCell = (props: PhoneUserCellProps) => {
  return (
    <View style={[styles.cellContainer]}>
      <Text style={[styles.contactNameText]}>{props.item.name}</Text>
      <Text style={[styles.contactNumberText]}>{props.item.phoneNumber}</Text>
      {props.item.city !== "" ? (
        <Text style={[styles.contactCityText]}>{props.item.city}</Text>
      ) : null}
      <View style={[styles.divider]} />
    </View>
  );
};

export default PhoneUserCell;
