import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Swipe from "../components/SwipeFeature/Swipe";

export default class PeopleTabScreen extends React.Component {
  render() {
    return(
      <SafeAreaView>
        <Swipe />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: "center",
    fontSize: 40,
  },
});
