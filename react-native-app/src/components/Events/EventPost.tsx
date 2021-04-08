import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

import Colors from "../../../constants/Colors";
import { Text, View } from "../Themed";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export interface IWallPostProps {
  eventName: string;
  contentText: string;
  //contentImage: Image;
  peopleNum: number;
}

export default class WallPost extends React.Component<IWallPostProps> {
  render() {
    const eventName = this.props.eventName;
    const contentText = this.props.contentText;
    const peopleNum = this.props.peopleNum;

    return (
      <TouchableOpacity>
        <View style={styles.wallPostBox}>
          <Text
            style={styles.wallPostTop}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Nazwa eventu {eventName}:
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
            Ile osób będzie: {peopleNum}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wallPostBox: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 5,

    paddingTop: 10,
    paddingBottom: 10,

    marginTop: 5,
    marginBottom: 5,
    marginLeft: Math.round(windowWidth * 0.02),
    marginRight: Math.round(windowWidth * 0.02),

    maxWidth: Math.round(windowWidth * 0.4),
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
