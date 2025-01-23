import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import navigationConfig from "./config";
import AddContact from "../screens/addContact";

const Stack = createNativeStackNavigator();

/*
  Contains Apps main stack of screens for navigation
*/

export enum MainScreens {
  Home = "Home",
  AddContact = "AddContact",
}

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ ...navigationConfig }}
      initialRouteName={MainScreens.Home}
    >
      <Stack.Screen
        name={MainScreens.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MainScreens.AddContact}
        component={AddContact}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
