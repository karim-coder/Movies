import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const AboutScreen = (props) => {
  return (
    <View style={styles.about}>
      <Text>
        <Text style={styles.textHeader}>Company: </Text>Geeksynergy Technologies
        Pvt Ltd
      </Text>
      <Text>
        <Text style={styles.textHeader}>Address: </Text>Sanjayanagar,
        Bengaluru-56
      </Text>
      <Text>
        <Text style={styles.textHeader}>Phone: </Text>XXXXXXXXX09
      </Text>
      <Text>
        <Text style={styles.textHeader}>Email: </Text>XXXXXX@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: "bold",
  },
  about: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
});

AboutScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Company Info",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: Colors.primary,
    },

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default AboutScreen;
