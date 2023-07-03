import React, { useState, useEffect} from "react";
import { Flex, Center, HStack, Heading, Text, Button, Icon, IconButton, VStack, Container, Spacer } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

import { useCountdown } from "../../hooks/useCountdown";

import { countdownDisplay } from "../../utils/time";
import { addFocusItem } from "../../storage/focus";

const DEFAULT_DURATION = 25 * 60;

const DURATIONS: Record<string, number> = {
  5: 5 * 60,
  10: 10 * 60,
  15: 15 * 60,
  20: 20 * 60,
};

type FocusCountdownProp = {
  activity: string,
  onDone: () => any,
};

export default function FocusCountdown({ activity, onDone }: FocusCountdownProp) {
  const [{ countDown, isStarted, isPaused }, { start, pause, reset }] = useCountdown(DEFAULT_DURATION);
  const [ selectedDuration, setSelectedDuration ] = useState<number>(DEFAULT_DURATION);

  const storeFocusItem = async () => {
    await addFocusItem({
      activity,
      duration: selectedDuration,
    });
  };

  useEffect(() => {
    if (isStarted && countDown === -1) {
      storeFocusItem();
      onDone();
      reset();
    }
  }, [activity, countDown, isStarted]);

  const displayOptionBtns = () => Object.entries(DURATIONS).map(([key, value]: [string, number]) => (
    <Button
      key={key}
      width="50"
      height="50"
      borderRadius="50%"
      onPress={() => {
        setSelectedDuration(value);
        start(value);
      }}
      backgroundColor="purple.500"
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Text fontSize={20} fontWeight="bold" color="white">
          {key}
        </Text>
      </Flex>
    </Button>
  ));

  return (
    <Flex width="100%"  flex={1}>
      <VStack space={20} justifyContent="center" alignItems="center"  flex={1} width="100%">
        <Center>
          <VStack space={1} marginBottom={10}>
            <Text fontSize="3xl" color="purple.800" textAlign="left">{activity}</Text>
          </VStack>          
          <Heading fontSize={100} marginBottom={20}>{countdownDisplay(countDown)}</Heading>
          <Flex justifyContent="center" alignItems="center" width="100%">
            <IconButton
              icon={
                <Icon
                name={isPaused ? "play" : "pause"}
                  marginLeft={isPaused ? 3 : 1}
                  as={FontAwesome5}
                  color="white"
                  size="4xl"
                />
              }
              onPress={() => isPaused ? start() : pause()}
              backgroundColor="purple.800"
              justifyContent="center"
              alignItems="center"
              borderRadius="100%"
              height={100}
              width={100}
            />
          </Flex>
        </Center>
        <HStack space={5}>
          {displayOptionBtns()}
        </HStack>
      </VStack>
    </Flex>
  );
}



