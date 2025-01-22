import { View, Text, StatusBar } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/header";
import { strings } from "../../utilities/strings";

interface Props {
  navigation: any;
  route: any;
}

const Home = (props: Props) => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header headerText={strings.APP_NAME} isBackIconHidden={true} />
    </View>
  );
};

export default Home;
