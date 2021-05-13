import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { USERS } from "../../../test_data/UserBaseArray";

const CardRender = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={card.image} style={styles.image} />
    </View>
  );
};

const CardDetails = ({ index }) => {
  return (
    <View style={styles.cardDetails}>
      <Text style={styles.text}>
        {USERS[index].name} {USERS[index].surname}
      </Text>
    </View>
  );
};

const Swipe = () => {
  const [index, setIndex] = useState(0);

  const onSwiped = () => {
    setIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={USERS}
          renderCard={(card) => <CardRender card={card} />}
          cardIndex={index}
          onSwiped={onSwiped}
          stackSize={3}
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "#FE3C72",
                  color: "#FFF",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 10,
                  marginLeft: -10,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "#77dd77",
                  color: "#FFF",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 10,
                  marginLeft: 10,
                },
              },
            },
          }}
        ></Swiper>
      </View>
      <View style={styles.bottomContainer}>
        <CardDetails index={index} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 0.65,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "transparent",
    color: "#FFF",
  },
  image: {
    width: 330,
    flex: 1,
    resizeMode: "stretch",
  },
  bottomContainer: {
    flex: 0.35,
  },
  swiperContainer: {
    flex: 0.35,
  },
  cardDetails: {
    alignItems: "center",
  },
});

export default Swipe;
