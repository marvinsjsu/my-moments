import { View, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import WorkoutItem from "../components/WorkoutItem";
import { SansProBoldText } from "../components/styled/SansProText";
import { useWorkouts } from "../hooks/useWorkouts";

import { Workout } from "../types/data";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const [ workoutData ] = useWorkouts();

  const handleOnPressWorkoutItem = (item: Workout) => {
    navigation.navigate("WorkoutDetail", {
      slug: item.slug,
      item: item,
    });
  };
      
  const renderItem = ({ item }: {item: Workout}) => (
    <Pressable onPress={() => handleOnPressWorkoutItem(item)}>
      <WorkoutItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <SansProBoldText style={styles.header}>
        New Workouts
      </SansProBoldText>
      <FlatList
        data={workoutData}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
