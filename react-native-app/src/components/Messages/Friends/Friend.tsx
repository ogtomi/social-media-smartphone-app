import React from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

const imageSize = Math.round(Dimensions.get("window").height / 15);

export interface IFriendProps {
  username: string;
  lastMessage: string;
  //avatar: Image;
}

export default class Friend extends React.Component<IFriendProps> {
  render() {
    const username = this.props.username;
    const lastMessage = this.props.lastMessage;

    //const avatar = this.props.avatar;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Avatar.Image
          size={imageSize}
          source={require("../../User/pictures/4-ea52435acc6cf488e05e75c209b2bd.jpg")}
        />
        <Text
          style={styles.username}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {username}
        </Text>
        <Text
          style={styles.lastMessage}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {lastMessage}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  username: {
    alignSelf: "center",
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  lastMessage: {
    alignSelf: "center",
    marginLeft: 8,
    marginTop: 5,
    fontSize: 15,
    //fontWeight: "bold",
  },
});
