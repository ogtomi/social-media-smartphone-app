import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { USERS } from "../../../test_data/UserBaseArray";

const CardRender = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={card.image} style={styles.image} />
      <Text style={styles.text}>
        {card.name} {card.surname}
      </Text>
    </View>
  );
};

const Swipe = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        cards={USERS}
        renderCard={(card) => <CardRender card={card} />}
        cardIndex={index}
        stackSize={3}
      ></Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
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
  },
  image: {
    width: 330,
    flex: 1,
    resizeMode: "stretch",
  },
});

export default Swipe;
