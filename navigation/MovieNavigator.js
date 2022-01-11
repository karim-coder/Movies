import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import MoviesScreen from "../screens/MoviesScreen";
import AboutScreen from "../screens/AboutScreen";

const loginFlow = createStackNavigator(
  {
    Signin: SigninScreen,
    Signup: SignupScreen,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  }
);

const Movie = createStackNavigator(
  {
    login: loginFlow,
    Movies: MoviesScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <FontAwesome
          name="file-movie-o"
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const About = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <AntDesign name="infocirlce" size={23} color={drawerConfig.tintColor} />
      ),
    },
  }
);

const MovieNavigator = createDrawerNavigator(
  {
    Movie: Movie,
    AboutCompany: About,
  },
  {
    contentOptions: {
      itemStyle: {
        padding: 10,
        marginTop: 10,
      },
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(MovieNavigator);
