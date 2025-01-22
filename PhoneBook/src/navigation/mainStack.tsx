import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import navigationConfig from "./config";

const Stack = createNativeStackNavigator();

/*
  Contains Apps main stack of screens for navigation
*/

enum MainScreens {
  Home = "Home",
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
    </Stack.Navigator>
  );
};

export default MainStack;
