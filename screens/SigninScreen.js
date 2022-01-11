import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthForm from "../components/AuthForm";

const SigninScreen = (props) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={errorMessage}
        submitButtonText="Sign In"
        navLinkText="Don't have an account? Sign up instead"
        routName="Signup"
        onSubmit={async ({ name, password }) => {
          try {
            let user = await AsyncStorage.getItem("user");

            let parsed = JSON.parse(user);
            if (parsed) {
              console.log({ User: parsed });
              let obj = parsed.find((o) => o.name === name);
              if (obj) {
                if (obj.name === name && obj.password === password) {
                  console.log("Yes");
                  AsyncStorage.setItem(
                    "token",
                    JSON.stringify({ name, password })
                  );
                  var token = await AsyncStorage.getItem("token");
                  console.log({ token: token });
                  setErrorMessage("");
                  props.navigation.navigate("Movies");
                } else {
                  setErrorMessage("Invalid name or password");
                }
              } else {
                console.log("No");
                setErrorMessage("Invalid name or password");
              }
            } else {
              setErrorMessage("Invalid name or password");
            }
          } catch (error) {
            setErrorMessage("Invalid name or password");

            console.log(error);
          }
        }}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
