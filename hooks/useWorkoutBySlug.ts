import { useState, useEffect } from "react";

import { getWorkoutBySlug } from "../storage/workout";

import { Workout } from "../types/data";

export function useWorkoutBySlug(slug: string): [Workout | null] {
  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    async function loadWorkout() {
      const workout = await getWorkoutBySlug(slug);

      if (workout) {
        setWorkout(workout);
      }
    }

    loadWorkout();
  }, []);

  return [workout];
}