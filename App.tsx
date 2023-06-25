import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import Navigation from "./navigation";

import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const [ isLoadingDone, data ] = useCachedResources();
  const colorScheme = useColorScheme();

  console.log({ colorScheme });

  if (!isLoadingDone) return null;

  return (
    <>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar style="auto" />
    </>      
  );
}
