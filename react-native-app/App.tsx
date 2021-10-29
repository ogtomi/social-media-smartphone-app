import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import StartScreen from "./src/screens/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { ColorSchemeName, View, Text } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import reducers from "./src/reducers";
import SignUpScreen from "./src/screens/SignUpScreen";
import RegisterForm from "./src/screens/Register.form";
import queryClient from "./src/common/reactQueryClient";
import { QueryClientProvider } from "react-query";
import Api from './src/apis/api'

const store = createStore(reducers, applyMiddleware(reduxThunk));
const Stack = createStackNavigator();

const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    Api.init()

    // const jssStyles = document.querySelector("#jss-server-side");
    // if(jssStyles) {
    //   jssStyles.parentElement!.removeChild(jssStyles);
    // }
    setIsAppReady(true);
  }, []);

  if(!isAppReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <QueryClientProvider client={queryClient}>
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
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Register" component={RegisterForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
