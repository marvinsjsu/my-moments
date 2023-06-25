import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import DailyQuote from "../components/styled/DailyQuote";
import SleepForm from "../components/forms/journal/SleepForm";
import GratitudeForm from "../components/forms/journal/GratitudeForm";
import JournalForm from "../components/forms/journal/JournalForm";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { GratitudeFormData, JournalFormData } from "../types/data";

import { JournalSteps } from "../constants";


export default function JournalScreen({ navigation }: NativeStackHeaderProps) {

  const [ step, setStep ] = useState<JournalSteps>(JournalSteps.Start);

  useEffect(() => {
    console.log("Rendering JournalScreen");

    return () => console.log("Unmounting JournalScreen");
  }, []);

  const handleSubmitGratitudeForm = (data: GratitudeFormData) => {};
  const handleSubmitJournalForm = (data: JournalFormData) => {};

  return (
    <View style={styles.container}>
      <DailyQuote />
      <SleepForm onSubmit={() => {}} />
      {/* <GratitudeForm onSubmit={handleSubmitGratitudeForm} /> */}
      {/* <JournalForm onSubmit={handleSubmitJournalForm} /> */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
