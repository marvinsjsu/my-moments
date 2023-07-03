import React from "react";
import { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { SansProBoldText } from "./SansProText";

const CountdownValues = ["Go!", "1", "2", "3"];

type CountdownProps = {
  onDone: () => void,
};

export default function Countdown({ onDone }: CountdownProps) {
  const [ idx, setIdx ] = useState<number>(CountdownValues.length - 1);
  const [ isStarted, setIsStarted ] = useState<boolean>(false);

  const countDisplay = CountdownValues[idx];
  const intervalRef = useRef<number | null>();

  useEffect(() => {
    if (intervalRef.current && idx < 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      onDone();
    }
  }, [idx]);

  const handlePressStart = () => {
    if (!isStarted) {
      intervalRef.current = window.setInterval(() => {
        setIdx((currIdx: number) => currIdx - 1);
      }, 1000);
      setIsStarted(true);
    }
  };

  const renderCountDisplay = () => {
    return (
      <>
        <SansProBoldText style={styles.title}>
          {"Countdown"}
        </SansProBoldText>
        <SansProBoldText style={styles.countDisplay}>
          {countDisplay}
        </SansProBoldText>
      </>
    );
  };

  const renderStartButton = () => {
    return (
      <>
        <SansProBoldText style={styles.title}>
          {"Let\'s get ready!"}
        </SansProBoldText>
        <FontAwesome
          onPress={handlePressStart}
          name="play-circle-o"
          color="black"
          size={170}
        />
      </>
    );
  }

  return (
    <View style={styles.container}>
      {isStarted
        ? renderCountDisplay()
        : renderStartButton()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    marginBottom: 38,
  },
  countDisplay: {
    fontSize: 120,
  }
});

