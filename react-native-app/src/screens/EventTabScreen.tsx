import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import EventPost from "../components/EventPost";

const DATA = [
  {
    id: "1",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "2",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "3",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "4",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "5",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "6",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "7",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "8",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
  {
    id: "9",
    eventName: "Chlanie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    peopleNum: 1000,
  },
];

export default function EventTabScreen() {
  return (
    // <View style={{ marginTop: 20 }}>
    //   <WallPost
    //     user="Kowalski"
    //     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    //     commentsNum={4}
    //     likesNum={3}
    //   />
    // </View>
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={DATA}
      renderItem={({ item }) => (
        <EventPost
          eventName={item.eventName}
          content={item.content}
          peopleNum={item.peopleNum}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexWrap: "wrap",
    alignContent: "space-around",
  },
  contentContainer: {
    //alignItems: "center",
    justifyContent: "space-around",
  },
});
