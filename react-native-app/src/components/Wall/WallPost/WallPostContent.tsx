import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

export interface IWallPostContentProps {
  contentText: string;
  //contentImage: Image;
}

export default class WallPostContent extends React.Component<IWallPostContentProps> {
  render() {
    const contentText = this.props.contentText;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <Image style={styles.wallPostImage} resizeMode="contain" source={require("../../../../test_data/najman.jpeg")}/>

        <Text
          style={styles.wallPostContent}
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
    //paddingTop: 10,
    paddingBottom: 10,
    //marginTop: 5,
    marginBottom: 5,
  },
  wallPostContent: {
    //marginLeft: 5,
    //fontSize: 20,
    //fontWeight: "bold",
  },
  wallPostImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    //margin: 0,
    //marginLeft: 5,
    //fontSize: 20,
    //fontWeight: "bold",
  },
});
