import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Text, View } from "../Themed";

export interface IWallPostProps {
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
}

export default class WallPost extends React.Component<IWallPostProps> {
  render() {
    const username = this.props.username;
    const contentText = this.props.contentText;
    const likesNum = this.props.likesNum;
    const commentsNum = this.props.commentsNum;

    return (
      <View
        style={styles.wallPostBox}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor="rgba(45,45,45,0.9)"
      >
        <Text
          style={styles.wallPostTop}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          User {username}:
        </Text>
        <Text
          style={styles.wallPostContent}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {contentText}
        </Text>
        <Text
          style={styles.wallPostBottom}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Likes: {likesNum} Comments: {commentsNum}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wallPostBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  wallPostTop: {
    marginLeft: 5,
    marginRight: 5,
  },
  wallPostContent: {
    margin: 5,
  },
  wallPostBottom: {
    marginLeft: 5,
    marginRight: 5,
  },
});
