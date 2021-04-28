import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "../../hooks/useColorScheme";

import WallPostFlatList from "../components/Wall/WallPost/WallPostFlatList";
import WallPostFullView from "../components/Wall/WallPostFullVIew/WallPostFullView";

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

export default function WallTabScreen() {
  var colorSchemeParam = useColorScheme();

  return (
    <NavigationContainer
      independent={true}
      theme={colorSchemeParam === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="WallPostFlatList">
        <Stack.Screen
          name="WallPostFlatList"
          component={WallPostFlatList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WallPostFullView"
          component={WallPostFullView}
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
