import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import axios from "axios";
import Movie from "../components/Movie";
import Colors from "../constants/Colors";

import CustomHeaderButton from "../components/HeaderButton";

const MoviesScreen = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.movies}>
          <FlatList
            data={data.result}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Movie
                title={item.title}
                url={item.poster}
                genre={item.genre}
                director={item.director}
                stars={item.stars}
                language={item.language}
                date={item.releasedDate}
                pageViews={item.pageViews}
                voting={item.voting}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

MoviesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Movies",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: Colors.primary,
    },

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  movies: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default MoviesScreen;
