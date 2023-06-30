import React from "react";
import { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import WorkoutForm from "../components/styled/WorkoutForm";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { WorkoutItemForm } from "../types/data";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Rendering PlannerScreen");

    return () => console.log("Unmounting PlannerScreen");
  }, []);

  const handleSubmit = (form: WorkoutItemForm) => {
    console.log({ form });
    alert(`${form.name} - ${form.duration}`);
  };

  return (
    <View style={styles.container}>
      <Text>PlannerScreen</Text>
      <WorkoutForm onSubmit={handleSubmit}/>
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
