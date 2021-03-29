import * as React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "../components/Themed";

import UserBar from "../components/User/UserBar";

export default class ProfileTabScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UserBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    fontSize: 40,
  },
});
