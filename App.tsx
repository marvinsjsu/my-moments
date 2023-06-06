import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';

import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const [ isLoadingDone, data ] = useCachedResources();

  if (!isLoadingDone) return null;

  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>      
  );
}

