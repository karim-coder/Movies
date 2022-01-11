import React from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthForm from "../components/AuthForm";

const SignupScreen = (props) => {
  var data = [];
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Movies"
        submitButtonText="Sign Up"
        navLinkText="Already have and account? Sign in instead!"
        routName="Signin"
        onSubmit={async ({ name, email, phone, password }) => {
          try {
            var user = await AsyncStorage.getItem("user");
            let parsed = JSON.parse(user);
            if (!parsed) {
              data.push({ name, email, phone, password });
              AsyncStorage.setItem("user", JSON.stringify(data));
            } else {
              data = parsed;
              data.push({ name, email, phone, password });
            }

            AsyncStorage.setItem("user", JSON.stringify(data));

            props.navigation.navigate("Movies");
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
