import React from "react";
import { ReactNode } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Box } from "native-base";

import { secondsToMinutes } from "../utils/time";

import { Workout } from "../types/data";

type WorkoutItemProps = {
  item: Workout,
  children?: ReactNode,
  childrenStyle?: StyleProp<ViewStyle>,
};

export default function WorkoutItem({ item, children, childrenStyle = {} }: WorkoutItemProps) {
  const [ durationText ] = secondsToMinutes(item.duration);

  return (
    <View style={styles.container}>
      <Box
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [0, 0],
            end: [1, 0]
          }
        }} p="12" rounded="xl" _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center'
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.duration}>Duration: {durationText}</Text>
        <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
        {children && (
          <View style={childrenStyle}>
            {children}
          </View>
        )}
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  }
});