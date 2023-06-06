import { containsKey, getData, removeItem, storeData } from "../storage";
import { DataKeys } from '../constants';

import { Workout } from "../types/data";

import data from "../data.json";

export const getWorkouts = async (): Promise<Workout[]> => {
  return await getData(DataKeys.WorkoutData);
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout | undefined> => {
  const workouts = await getWorkouts();
  return workouts.find(workout => workout.slug === slug);
};

export const initWorkouts = async (): Promise<Boolean> => {
    const hasWorkouts = await containsKey(DataKeys.WorkoutData);

    if (!hasWorkouts) {
      await storeData(DataKeys.WorkoutData, data);
      return true;
    }

    return false;
};

export const clearWorkouts = async () => {
  await removeItem(DataKeys.WorkoutData);
};

