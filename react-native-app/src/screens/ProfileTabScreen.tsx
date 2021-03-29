import * as React from "react";

import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "../components/Themed";

import User from "../components/User/UserProfileInfo"

export default class ProfileTabScreen extends React.Component {
  render() {
    return(
        <User />
    )}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: "center",
    fontSize: 40,
  },
});
