import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";

import { Text, View } from "../../Themed";
import Colors from "../../../../constants/Colors";

const imageSize = Math.round(Dimensions.get("window").height / 17);

export interface IWallPostCommentProps {
  username: string;
  contentText: string;
  //avatar: Image;
}

export default class WallPostComment extends React.Component<IWallPostCommentProps> {
  render() {
    const { username, contentText } = this.props;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <View
          darkColor={Colors["dark"].postBackgroundColor}
          style={styles.wallCommentAndAvatar}
        >
          <Avatar.Image
            size={imageSize}
            source={require("../../User/pictures/4-ea52435acc6cf488e05e75c209b2bd.jpg")}
          />
          <Text
            style={styles.wallCommentAuthor}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            {username}
          </Text>
        </View>
        <Text
          style={styles.wallCommentContent}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {contentText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  wallCommentAndAvatar: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  wallCommentAuthor: {
    //paddingTop: usernamePaddingTop,
    alignSelf: "center",
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  wallCommentContent: {
    paddingTop: 5,
  },
});
