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
  );
}

const styles = StyleSheet.create({
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