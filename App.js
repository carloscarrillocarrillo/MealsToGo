import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>Our canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    padding: 16, 
    backgroundColor: 'green',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
    width: '100%',
  }
});
