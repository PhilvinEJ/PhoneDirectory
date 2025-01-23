import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./mainStack";
import { navigationRef } from "./rootNavigation";
import React from "react";
// import { PhoneCellModel } from "../data/models/PhoneCellModel";
// import { fetchContacts } from "../utilities/asyncStore";
// import AppLoading from "expo-app-loading";
// import { useAppDispatch } from "../hooks/reduxHooks";
// import { dataEmpty, dataPresent } from "../redux/reducers/contacts/contactsReducer";

const RootStack = createStackNavigator();

const AppContainer = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
      </NavigationContainer>
    </>
  );
};

const RootStackScreen = () => {
  // const [loading, setLoading] = React.useState(true);
  // const [contacts, setContacts] = React.useState<PhoneCellModel[] | undefined>(
  //   []
  // );
  // const dispatch = useAppDispatch();

  // const getContacts = async () => {
  //   const userContacts = await fetchContacts();
  //   if (Array.isArray(userContacts)) {
  //     setContacts(userContacts);
  //     console.log(contacts);
  //     dispatch(dataPresent(userContacts.sort((a, b) => a.name.localeCompare(b.name))));
  //   } else {
  //     setContacts(undefined);
  //     dispatch(dataEmpty([]));
  //   }
  //   setLoading(false);
  // };

  // if (loading) {
  //   <AppLoading
  //     startAsync={getContacts}
  //     onFinish={() => setLoading(false)}
  //     onError={() => setLoading(false)}
  //   />;
  // }

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainStack"
        component={MainStack}
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default AppContainer;
