import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/Home";
import CatalogScreen from "../screens/Catalog";
import SearchScreen from "../screens/Search";
import CartScreen from "../screens/Cart";

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "HOME",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/images/home.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Catalog: {
      screen: CatalogScreen,
      navigationOptions: {
        tabBarLabel: "CATALOG",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/images/catalog.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "SEARCH",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/images/search.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },

    Account: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "ACCOUNT",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/images/account.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },

    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: "CART",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/images/cart.png")}
            style={{
              height: 24,
              width: 24,
              resizeMode: "contain",
              tintColor: tintColor,
            }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "rgb(173,173,173)",
      inactiveTintColor: "rgb(173,173,173)",
      showLabel: false,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 1,
      },
    },
  }
);

export default (AppContainer = createAppContainer(bottomTabNavigator));
