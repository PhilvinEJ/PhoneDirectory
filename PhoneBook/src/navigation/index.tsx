import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./mainStack";
import { navigationRef } from "./rootNavigation";

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
