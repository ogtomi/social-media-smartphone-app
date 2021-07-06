import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
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
import SignUpScreen from "./src/screens/SignUpScreen";

const store = createStore(reducers, applyMiddleware(reduxThunk));
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
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
