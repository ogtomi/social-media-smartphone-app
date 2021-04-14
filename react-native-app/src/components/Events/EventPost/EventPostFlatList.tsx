import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Colors from "../../../../constants/Colors";

import EventPost from "./EventPost";
import EventPostBottomBar from "./EventPostBottomBar";

import { Text, View } from "../../Themed";

const DATA = [
  {
    id: "1",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "2",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "3",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "4",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "5",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "6",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
  {
    id: "7",
    username: "Pudzian",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    participantsNum: 1000,
    eventDate: "2021-04-20 20:00:00",
  },
];

export interface IEventPostFlatListProps {
  navigation: any;
}

export default class EventPostFlatList extends React.Component<IEventPostFlatListProps> {
  render() {
    return (
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <View lightColor="rgba(242,242,242,1)" darkColor="rgba(0,0,0,1)">
            <TouchableOpacity
              //activeOpacity={1}
              delayPressIn={100}
              onPress={() =>
                this.props.navigation.navigate("EventPostFullView", {
                  username: item.username,
                  eventName: item.eventName,
                  contentText: item.content,
                  participantsNum: item.participantsNum,
                  eventDate: item.eventDate,
                })
              }
            >
              <EventPost
                username={item.username}
                eventName={item.eventName}
                contentText={item.content}
                participantsNum={item.participantsNum}
                eventDate={item.eventDate}
              />
            </TouchableOpacity>
            <View
              //lightColor="rgba(242,242,242,0.9)"
              darkColor={Colors["dark"].postBackgroundColor}
              style={styles.buttonStyles}
            >
              <EventPostBottomBar />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  buttonStyles: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    marginBottom: 8,
  },
});
