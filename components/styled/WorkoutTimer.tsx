import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { secondsToMinutes } from "../../utils/time";

import { SansProBoldText } from "./SansProText";

type WorkoutTimerProps = {
  name: string,
  count: number,
  isPaused: boolean,
  onPressStart: () => void,
  onPressPause: () => void,
};

export default function WorkoutTimer(props: WorkoutTimerProps) {
  const { name, count, isPaused, onPressStart, onPressPause } = props;

  const [_timeStr, mins, secs] = secondsToMinutes(count);
  const minsDisplay = mins === 0 ? "00" : (mins < 10) ? `0${mins}` : mins;
  const secsDisplay = secs < 10 ? `0${secs}` : secs;
  const timeDisplay = `${minsDisplay}:${secsDisplay}`;

  return (
    <View style={styles.container}>
      <SansProBoldText style={styles.name}>
        {name}
      </SansProBoldText>
      <SansProBoldText style={styles.count}>
        {count === -1 ? "00:00" : timeDisplay}
      </SansProBoldText>
      {isPaused
        ? (
          <FontAwesome
            onPress={onPressStart}
            name="play-circle-o"
            color="black"
            size={100}
          />
        )
        : (
          <FontAwesome
            onPress={onPressPause}
            name="pause-circle-o"
            color="black"
            size={100}
          />            
        ) 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 24,
    // borderWidth: 2,
    // borderColor: "#4a0303",
  },
  name: {
    fontSize: 36,
  },
  count: {
    fontSize: 120,
  },
  preCountdown: {
    fontSize: 56,
    textAlign: "center",
    marginBottom: 40,
  },
});
