import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import WallTabScreen from "../screens/WallTabScreen";
import EventTabScreen from "../screens/EventTabScreen";
import PeopleTabScreen from "../screens/PeopleTabScreen";
import UserProfileInfo from "../components/User/UserBar";
import MessagesTabScreen from "../screens/MessageTabScreen";
import ProfileTabScreen from "../screens/ProfileTabScreen";
import {
  BottomTabParamList,
  WallTabParamList,
  EventTabParamList,
  PeopleTabParamList,
  MessagesTabParamList,
  ProfileTabParamList,
} from "../../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Wall"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Wall"
        component={WallTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Events"
        component={EventTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="People"
        component={PeopleTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="people" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WallTabStack = createStackNavigator<WallTabParamList>();

function WallTabNavigator() {
  return (
    <WallTabStack.Navigator>
      <WallTabStack.Screen
        name="WallTabScreen"
        component={WallTabScreen}
        options={{ headerShown: false }}
      />
    </WallTabStack.Navigator>
  );
}

const EventTabStack = createStackNavigator<EventTabParamList>();

function EventTabNavigator() {
  return (
    <EventTabStack.Navigator>
      <EventTabStack.Screen
        name="EventTabScreen"
        component={EventTabScreen}
        options={{ headerShown: false }}
      />
    </EventTabStack.Navigator>
  );
}

const PeopleTabStack = createStackNavigator<PeopleTabParamList>();

function PeopleTabNavigator() {
  return (
    <PeopleTabStack.Navigator>
      <PeopleTabStack.Screen
        name="PeopleTabScreen"
        component={PeopleTabScreen}
        options={{ headerShown: false }}
      />
    </PeopleTabStack.Navigator>
  );
}

const MessagesTabStack = createStackNavigator<MessagesTabParamList>();

function MessagesTabNavigator() {
  return (
    <MessagesTabStack.Navigator>
      <MessagesTabStack.Screen
        name="MessagesTabScreen"
        component={MessagesTabScreen}
        options={{ headerShown: false }}
      />
    </MessagesTabStack.Navigator>
  );
}

const ProfileTabStack = createStackNavigator<ProfileTabParamList>();

function ProfileTabNavigator() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileTabScreen"
        component={ProfileTabScreen}
        options={{ headerShown: false }}
      />
    </ProfileTabStack.Navigator>
  );
}
