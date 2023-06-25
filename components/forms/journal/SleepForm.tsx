import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

import MoodForm from "./MoodForm";
import { SansProBoldText } from "../../styled/SansProText";
import { getInitialSleepTime } from "../../../utils/time";
import { MoodTypes, SleepTimeTypes } from "../../../constants";
import { SleepFormData } from "../../../types/data";

type SleepFormProps = {
  onSubmit: (form: SleepFormData) => void,
};

export default function SleepForm({ onSubmit }: SleepFormProps) {
  const initialWakeTime = new Date();
  const initialSleepTime = getInitialSleepTime();

  const [ wakeTime, setWakeTime ] = useState<Date>(initialWakeTime);
  const [ sleepTime, setSleepTime ] = useState<Date>(initialSleepTime);
  const [ mood, setMood ] = useState<MoodTypes | undefined>(undefined);

  return (
    <View style={styles.container}>
      <SansProBoldText style={styles.wakeTime}>
        I woke up at
        <DateTimePicker
          onChange={(event, selectedTime) => setWakeTime(selectedTime || new Date())}
          testID="dateTimePicker"
          value={wakeTime}
          display="default"
          mode="time"
        /> 
      </SansProBoldText>

      <SansProBoldText style={styles.sleepTime}>Went to sleep at
        <DateTimePicker
          onChange={(event, selectedTime) => setSleepTime(selectedTime || new Date())}
          testID="dateTimePicker"
          value={sleepTime}
          display="default"
          mode="time"
        /> 
      </SansProBoldText>
      {/* <Text>Shows location temp low and high, with icons</Text>
      <Text>How are you feeling now?</Text> */}
      <MoodForm onChange={(mood) => setMood(mood)}/>
      <AntDesign name="arrowright" size={54} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sleepTime: {
    fontSize: 24,
    lineHeight: 44,
    textAlignVertical: "center",
    marginBottom: 18,
  },
  wakeTime: {
    fontSize: 24,
    lineHeight: 44,
    textAlignVertical: "center",
    marginBottom: 18,
  },
});
