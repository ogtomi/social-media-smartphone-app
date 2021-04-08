import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Text, View } from "../Themed";

export interface IWallPostFullProps {
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
  route: any;
}

export default class WallPostFull extends React.Component<IWallPostFullProps> {
  render() {
    const {
      username,
      contentText,
      likesNum,
      commentsNum,
    } = this.props.route.params;

    return (
      <View
        style={styles.wallPostBox}
        //lightColor="rgba(255,255,255,1)"
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
