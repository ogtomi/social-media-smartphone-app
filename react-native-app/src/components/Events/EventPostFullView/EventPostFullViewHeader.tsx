import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../Themed";

import EventPostAuthor from "../EventPost/EventPostAuthor";
import EventPostContent from "../EventPost/EventPostContent";
import EventPostStats from "../EventPost/EventPostStats";
import EventPostInfo from "../EventPost/EventPostInfo";

export interface IEventPostFullViewHeaderProps {
  username: string;
  eventName: string;
  contentText: string;
  //contentImage: Image;
  participantsNum: number;
  eventDate: string;
}

export default class EventPostFullViewHeader extends React.Component<IEventPostFullViewHeaderProps> {
  render() {
    const eventName = this.props.eventName;
    const username = this.props.username;
    const contentText = this.props.contentText;
    const participantsNum = this.props.participantsNum;
    const eventDate = this.props.eventDate;

    return (
      <View
        lightColor="rgba(242,242,242,0.9)"
        //darkColor={Colors["dark"].postBackgroundColor}
      >
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 5,
    marginBottom: 40,
  },
});
