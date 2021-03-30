import React from "react";

import { Text, View } from "../Themed";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import { Avatar } from "react-native-paper";

import UserStat, { IUserStatProps } from "./UserStat";

export interface IUSerProfileInfoProps {
  username: string;
}

export default class UserProfileInfo extends React.Component<IUSerProfileInfoProps> {
  render() {
    const { username } = this.props;

    return (
      <View style={styles.container}>
        <Avatar.Image
          size={130}
          source={require("./pictures/4-ea52435acc6cf488e05e75c209b2bd.jpg")}
        />
        <View style={styles.info}>
          <Text style={{ fontSize: 20 }}>Mariusz Pudzianowski</Text>
          <View style={styles.stats}>
            <UserStat name="Friends" display="267" />
            <UserStat name="Events" display="13" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 20,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30
  },

  info: {
    marginLeft: 20,
    height: "90%",
    width: "60%",
    flexDirection: "column",
    justifyContent: "center"
  },
});
