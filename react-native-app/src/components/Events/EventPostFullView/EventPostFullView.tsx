import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";

import Colors from "../../../../constants/Colors";
import EventPostFullViewHeader from "./EventPostFullViewHeader";
import EventPostComment from "./EventPostComment";
import { Text, View } from "../../Themed";

const DATA = [
  {
    id: "1",
    user: "Pudzian",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "2",
    user: "Dziekan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "3",
    user: "Makłowicz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "4",
    user: "Makłowicz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "5",
    user: "Makłowicz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "6",
    user: "Makłowicz",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export interface IEventPostFullViewProps {
  //wallPostId: number;
  username: string;
  contentText: string;
  //contentImage: Image;
  likesNum: number;
  commentsNum: number;
  route: any;
}

export default class EventPostFullView extends React.Component<IEventPostFullViewProps> {
  render() {
    const {
      username,
      eventName,
      contentText,
      participantsNum,
      eventDate,
    } = this.props.route.params;

    return (
      <FlatList
        ListHeaderComponent={
          <>
            <View darkColor={Colors["dark"].postBackgroundColor}>
              <EventPostFullViewHeader
                username={username}
                eventName={eventName}
                contentText={contentText}
                participantsNum={participantsNum}
                eventDate={eventDate}
              />
            </View>
          </>
        }
        style={styles.container}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={styles.wallComment}
            lightColor="rgba(242,242,242,1)"
            darkColor="rgba(0,0,0,1)"
          >
            <EventPostComment username={item.user} contentText={item.content} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 20,
    //paddingBottom: 50,
  },
  wallComment: {
    paddingBottom: 8,
    //marginBottom: 8,
  },
});
