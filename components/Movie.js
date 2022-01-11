import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

const Movie = (props) => {
  return (
    <View>
      <View style={styles.movie}>
        <View style={styles.vote}>
          <AntDesign name="caretup" size={24} color="black" />
          <Text style={{ fontSize: 18 }}>{props.voting}</Text>
          <AntDesign name="caretdown" size={24} color="black" />

          <Text style={styles.voteText}>Votes</Text>
        </View>
        <Image style={styles.image} source={{ uri: props.url }} />
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.detail}>
            <Text style={styles.header}>Genre: </Text>
            {props.genre}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.header}>Director: </Text>
            {props.director}
          </Text>
          <Text numberOfLines={1} style={styles.detail}>
            <Text style={styles.header}>Starring: </Text>
            {props.stars}
          </Text>
          <Text>
            Mins | {props.language} | {moment(props.date).format("DD MMM")}
          </Text>
          <Text style={styles.views}>
            {props.pageViews} views | Voted by {props.voting} People
          </Text>
        </View>
      </View>

      <Button title="Watch Trailer" />
    </View>
  );
};
const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  image: {
    height: 130,
    width: 80,
    borderRadius: 6,
    margin: 10,
  },
  title: {
    fontSize: 22,
    marginVertical: 5,
  },
  header: {
    fontWeight: "bold",
    color: "#888",
  },
  detail: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  views: {
    color: "#189AB4",
  },
  vote: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  voteText: {
    marginTop: 20,
  },
});
export default Movie;
