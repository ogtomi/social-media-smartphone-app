import React, { useEffect } from "react";
import StartScreen from "./src/screens/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

const Stack = createStackNavigator();

const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
