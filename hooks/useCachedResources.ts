import { useState, useEffect } from "react";
import * as Font from "expo-font";

import { getWorkouts, initWorkouts } from "../storage/workout";

export default function useCachedResources() {
  const [ isLoadingDone, setIsLoadingDone ] = useState(false);

  useEffect(() => {
    async function loadResourcesAndData() {
      try {
        await initWorkouts();
        await Font.loadAsync({
          "sanspro": require("../assets/fonts/SourceSansPro-Regular.ttf"),
          "sanspro-bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
        });
      } catch(error) {
        console.warn(error);
      } finally {
        const workouts = await getWorkouts();
        console.log({ workouts });
        setIsLoadingDone(true);
      }
    }

    loadResourcesAndData();

  }, []);

  return [ isLoadingDone ];
}

