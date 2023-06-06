import { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function JournalScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Rendering JournalScreen");

    return () => console.log("Unmounting JournalScreen");
  }, []);

  return (
    <View style={styles.container}>
      <Text>JournalScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
