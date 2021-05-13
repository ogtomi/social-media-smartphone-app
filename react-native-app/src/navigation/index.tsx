import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
