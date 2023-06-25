import { useState, useEffect } from "react";
import * as Font from "expo-font";

import { getWorkouts, initWorkouts } from "../storage/workout";
import { getDailyQuote, initJournal } from "../storage/journal";

export default function useCachedResources() {
  const [ isLoadingDone, setIsLoadingDone ] = useState(false);

  useEffect(() => {
    async function loadResourcesAndData() {
      try {
        await initWorkouts();
        await initJournal();
        await Font.loadAsync({
          "sanspro": require("../assets/fonts/SourceSansPro-Regular.ttf"),
          "sanspro-bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
          "sans3-italic": require("../assets/fonts/SourceSans3-BoldItalic.ttf"),
        });
      } catch(error) {
        console.warn(error);
      } finally {
        const workouts = await getWorkouts();
        const dailyQuote = await getDailyQuote();
        console.log({ workouts, dailyQuote });
        setIsLoadingDone(true);
      }
    }

    loadResourcesAndData();

  }, []);

  return [ isLoadingDone ];
}

