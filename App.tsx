import React from "react";
import { StatusBar } from "expo-status-bar";
import { SSRProvider } from "@react-aria/ssr";
import { useColorScheme } from "react-native";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import Navigation from "./navigation";
import theme from "./theme";

import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const [ isLoadingDone ] = useCachedResources();
  const colorScheme = useColorScheme();

  console.log({ colorScheme });

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  

  if (!isLoadingDone) return null;

  return (
    <SafeAreaProvider>
      <SSRProvider>
        <NativeBaseProvider theme={theme} config={config}>
          <Navigation colorScheme={colorScheme}/>
          <StatusBar style="auto" />
        </NativeBaseProvider>
      </SSRProvider>
    </SafeAreaProvider>      
  );
}
