import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "../../hooks/useColorScheme";

import FriendFlatList from "../components/Messages/Friends/FriendFlatList";
import Conversation from "../components/Messages/Conversation/Conversation";

const DATA = [
  {
    id: "1",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "2",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "3",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "4",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "5",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "6",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "7",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "8",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
  {
    id: "9",
    user: "Kowalski",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    commentsNum: 4,
    likesNum: 3,
  },
];

const Stack = createStackNavigator();

export default function MessageTabScreen() {
  var colorSchemeParam = useColorScheme();

  return (
    <NavigationContainer
      independent={true}
      theme={colorSchemeParam === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="FriendFlatList">
        <Stack.Screen
          name="FriendFlatList"
          component={FriendFlatList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
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
