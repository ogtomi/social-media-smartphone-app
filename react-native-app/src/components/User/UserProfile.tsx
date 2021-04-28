import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import GenderButton from "./GenderButton";
import UserInput from "./UserInput";
import DateOfBirth from './DateOfBirth'

export default class UserProfile extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.rowLayout}>
          <UserInput text="First name" />
          <UserInput text="Last name" />
        </View>
        <DateOfBirth />
        <GenderButton />
        <UserInput text="Description" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowLayout: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
