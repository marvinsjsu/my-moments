import { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Rendering PlannerScreen");

    return () => console.log("Unmounting PlannerScreen");
  }, []);

  return (
    <View style={styles.container}>
      <Text>PlannerScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Journal"
        onPress={() => navigation.navigate("Journal")}
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
