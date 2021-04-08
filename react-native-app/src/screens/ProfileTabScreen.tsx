import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "../components/Themed";
import UserBar from "../components/User/UserBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import UserTabs from '../components/User/UserTabs'

export default class ProfileTabScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UserBar username="username" />
        <UserTabs />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    fontSize: 40,
  },

  switchBar: {
    justifyContent: "space-evenly",
  },
});
