import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <Searchbar />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    padding: 16,
    width: "100%",
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    width: "100%",
  },
});
