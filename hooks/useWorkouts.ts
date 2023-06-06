import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getWorkouts } from "../storage/workout";

import { Workout } from "../types/data";

export function useWorkouts() {
  const [ workoutData, setWorkoutData ] = useState<Workout[]>([]);
  const [ screen, setScreen ] = useState<string>("");
  const isFocused = useIsFocused();

  useEffect(() => {
    let isMounted = true;
    async function loadWorkouts() {
      const workouts = await getWorkouts();
      
      if (isMounted) {
        setWorkoutData(workouts);
      }
    }

    if (isFocused) {
      loadWorkouts();
    }

    return () => {
      isMounted = false;
    }
  }, [screen, isFocused]);

  return [workoutData, setScreen];
}
