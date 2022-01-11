import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routName }) => {
  return (
    <TouchableOpacity
      style={styles.navLink}
      onPress={() => navigation.navigate(routName)}
    >
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
  navLink: {
    margin: 10,
  },
});

export default withNavigation(NavLink);
