import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserProfile from "./UserProfile";
import UserWall from "./UserWall";
import Friends from "./Friends";

const Tab = createMaterialTopTabNavigator();

function UserTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="posts"
        component={UserWall}
        options={{ title: "My posts" }}
      />
      <Tab.Screen
        name="profile"
        component={UserProfile}
        options={{ title: "My profile" }}
      />
      <Tab.Screen
        name="friends"
        component={Friends}
        options={{ title: "My friends" }}
      />
    </Tab.Navigator>
  );
}

export default UserTabs;
