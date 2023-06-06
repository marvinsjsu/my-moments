import { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { secondsToMinutes } from "../../utils/time";

import { SansProBoldText } from "./SansProText";

type WorkoutTimerProps = {
  name: string,
  count: number,
  isPaused: boolean,
  isStarted: boolean,
  onPressStart: () => void,
  onPressPause: () => void,
};

const countDown = ["Go!", "1", "2", "3", "Let\'s get ready!"];

export default function WorkoutTimer(props: WorkoutTimerProps) {
  const { name, count, isStarted, isPaused, onPressStart, onPressPause } = props;

  const [ countDownIdx, setCountDownIdx ] = useState<number>(countDown.length - 1);
  const countDownIntervalRef = useRef<number | null>();
 
  const [_timeStr, mins, secs] = secondsToMinutes(count);
  const minsDisplay = mins === 0 ? "00" : (mins < 10) ? `0${mins}` : mins;
  const secsDisplay = secs < 10 ? `0${secs}` : secs;
  const timeDisplay = `${minsDisplay}:${secsDisplay}`;

  const showTimerDisplay = count > -1;
  const startCountDone = count === -1;
  const nameDisplay = startCountDone ? countDown[countDownIdx] : name;

  useEffect(() => {
    if (countDownIntervalRef.current && countDownIdx <= 0) {
      clearInterval(countDownIntervalRef.current);
      countDownIntervalRef.current = null;
      onPressStart();
    }
  }, [countDownIdx]);

  const handlePressStart = () => {
    countDownIntervalRef.current = window.setInterval(() => {
      setCountDownIdx((idx) => idx - 1);
    }, 1000);
  };

  const renderPreCountdown = () => {
    return (
      <SansProBoldText style={styles.preCountdown}>
        {countDown[countDownIdx]}
      </SansProBoldText>
    );
  };

  const renderCountdown = () => {
    return (
      <>
        <SansProBoldText style={styles.name}>
          {name}
        </SansProBoldText>
        <SansProBoldText style={styles.count}>
          {count === -1 ? "00:00" : timeDisplay}
        </SansProBoldText>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {countDownIdx > 0 ? renderPreCountdown() : renderCountdown()}

      {/* <SansProBoldText style={styles.name}>
        {nameDisplay}
      </SansProBoldText>
      {showTimerDisplay && (
        <SansProBoldText style={styles.count}>
          {startCountDone ? "00:00" : timeDisplay}
        </SansProBoldText>
      )} */}
      {isPaused
        ? (
          <FontAwesome
            onPress={onPressStart}
            name="play-circle-o"
            color="black"
            size={78}
          />
        )
        : isStarted ? (
            <FontAwesome
              onPress={onPressPause}
              name="pause-circle-o"
              color="black"
              size={78}
            />            
          ) : (
            <FontAwesome
              onPress={handlePressStart}
              name="play-circle-o"
              color="black"
              size={78}
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
