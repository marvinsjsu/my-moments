import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Modal from "../components/styled/Modal";
import WorkoutItem from "../components/WorkoutItem";
import WorkoutTimer from "../components/styled/WorkoutTimer";
import PressableText from "../components/styled/PressableText";
import { SansProBoldText } from "../components/styled/SansProText";

import { useCountdown } from "../hooks/useCountdown";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

import { secondsToMinutes } from "../utils/time";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { SequenceItem } from "../types/data";

import { Workout } from "../types/data";

type DetailParams = {
  route: {
    params: {
      slug: string,
      item: Workout,
    }
  }
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen ({ route }: Navigation) {
  const [ sequence, setSequence ] = useState<SequenceItem[]>([]);
  const [ sequenceIdx, setSequenceIdx] = useState<number>(-1);
  const [ isWorkoutDone, setIsWorkoutDone ] = useState<boolean>(false);
  const [ workout ] = useWorkoutBySlug(route.params.slug);
  const [{ countDown, isStarted, isPaused }, { start, pause, reset }] = useCountdown();

  useEffect(() => {
    if (workout && countDown === 0) {
      if (sequenceIdx < sequence.length) {
        addItemToSequence(sequenceIdx + 1);
      }
    }
  }, [countDown]);

  if (!workout) return null;

  const nextWorkoutIdx = sequenceIdx + 1;
  const hasNextWorkout = nextWorkoutIdx < workout.sequence.length;
  const workoutName = sequence.length > 0 && sequence[sequence.length - 1].name;
  const showWorkoutTimer = !isWorkoutDone;
  const nextWorkoutName = hasNextWorkout && workout.sequence[nextWorkoutIdx].name;

  console.log({ nextWorkoutName, workout, nextWorkoutIdx });

  const addItemToSequence = (idx: number) => {
    if (idx < workout.sequence.length) {
      setSequence([...sequence, workout?.sequence[idx]]);
      setSequenceIdx(idx);
      start(workout.sequence[idx].duration);
    } else {
      setIsWorkoutDone(true);
    }
  };

  const handlePressPause = () => {
    pause();
  }

  const handlePressStart = () => {
    if (!isStarted) {
      addItemToSequence(0);
    } else if (isStarted && isPaused) {
      start();
    }
  };

  const handlePressReset = () => {
    setSequence([]);
    setSequenceIdx(-1);
    setIsWorkoutDone(false);
    reset();
  };

  return (
    <View style={styles.container}>
      <WorkoutItem
        childrenStyle={styles.childrenStyle}
        item={workout}
      >
        <Modal
          openComponent={({ onPress }) => (
            <PressableText
              text="Open"
              onPress={onPress}
            />
          )}
          closeComponent={({ onPress }) => (
            <PressableText
              text="Close"
              onPress={onPress}
            />
          )}
        >
          <View style={styles.modalContent}>
            {workout.sequence.map((item, idx)=> (
              <View
                key={item.slug}
                style={styles.sequenceItem}
              >
                <SansProBoldText style={styles.modalContentViewText}>
                  {item.name} | {item.type} | {secondsToMinutes(item.duration)[0]}
                </SansProBoldText>
                {idx < workout.sequence.length - 1 && (
                  <FontAwesome
                    name="arrow-circle-down"
                    color={"black"}
                    size={32}
                  />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      {showWorkoutTimer && (
        <WorkoutTimer
          onPressStart={handlePressStart}
          onPressPause={handlePressPause}
          isStarted={isStarted}
          isPaused={isPaused}
          name={workoutName}
          count={countDown}
        />
      )}
      {nextWorkoutName && (
        <View style={styles.nextWorkoutContainer}>
          <SansProBoldText style={styles.nextWorkoutText}>
            {nextWorkoutName}
          </SansProBoldText>
        </View>
      )}
      {isWorkoutDone && (
        <View style={styles.doneContainer}>
          <SansProBoldText style={styles.doneText}>
            Awesome Work!
          </SansProBoldText>
          <PressableText text="Reset" onPress={handlePressReset} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  difficulty: {
    fontSize: 16,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {

  },
  sequenceItem: {
    alignItems: "center",
    marginBottom: 12,
  },
  modalContentViewText: {
    fontSize: 21,
    marginBottom: 12,
  },
  childrenStyle: {
    marginTop: 10,
  },
  countDown: {
    fontSize: 100,
  },
  doneContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  doneText: {
    fontSize: 48,
  },
  nextWorkoutContainer: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  nextWorkoutText: {
    fontSize: 32,
    opacity: 0.75,
  }
});
