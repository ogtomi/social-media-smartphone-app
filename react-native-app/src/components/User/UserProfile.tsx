import React from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from "../Themed";
import GenderButton from "./GenderButton";

export default class UserProfile extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <GenderButton />
      </SafeAreaView>
    );
  }
}
