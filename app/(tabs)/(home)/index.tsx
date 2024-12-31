import { StyleSheet, Text, Platform, View, SafeAreaView } from "react-native";
import * as React from "react";
import HomeHeader from "@/components/home-header";
import HomeCard from "@/components/HomeCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <HomeHeader />
        </View>
        <View style={{ flex: 1 }}>
          <HomeCard />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
