import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "../../hooks/useColorScheme";

import EventPostFlatList from "../components/Events/EventPost/EventPostFlatList";
import EventPostFullView from "../components/Events/EventPostFullView/EventPostFullView";

const DATA = [
  {
    id: "1",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "2",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "3",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "4",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "5",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "6",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
  {
    id: "7",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
  },
];

const Stack = createStackNavigator();

export default function WallTabScreen() {
  var colorSchemeParam = useColorScheme();

  return (
    <NavigationContainer
      independent={true}
      theme={colorSchemeParam === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="EventPostFlatList">
        <Stack.Screen
          name="EventPostFlatList"
          component={EventPostFlatList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventPostFullView"
          component={EventPostFullView}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
