import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

import EventPostAuthor from "./EventPostAuthor";
import EventPostContent from "./EventPostContent";
import EventPostStats from "./EventPostStats";
import EventPostInfo from "./EventPostInfo";

export interface IWallPostProps {
  username: string;
  eventName: string;
  contentText: string;
  //contentImage: Image;
  participantsNum: number;
  eventDate: string;
}

export default class WallPost extends React.Component<IWallPostProps> {
  render() {
    const eventName = this.props.eventName;
    const username = this.props.username;
    const contentText = this.props.contentText;
    const participantsNum = this.props.participantsNum;
    const eventDate = this.props.eventDate;

    return (
      <View
        style={styles.container}
        //lightColor="rgba(242,242,242,0.9)"
        darkColor={Colors["dark"].postBackgroundColor}
      >
        <EventPostAuthor username={username} />
        <EventPostInfo eventName={eventName} eventDate={eventDate} />
        <EventPostContent contentText={contentText} />
        <EventPostStats participantsNum={participantsNum}></EventPostStats>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    //paddingBottom: 10,
    marginTop: 5,
    //marginBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
