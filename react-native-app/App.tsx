import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import StartScreen from "./src/screens/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import reducers from "./src/reducers";

const store = createStore(reducers);
const Stack = createStackNavigator();

const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <Provider store={store}>
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
            //options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
