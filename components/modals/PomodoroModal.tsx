import React from "react";
import { Flex, Heading, Text, IconButton, Icon, VStack, Center, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import Modal from "../styled/Modal";

export default function PomodoroModal() {
  return (
    <Modal
      openComponent={({ onPress }) => (
        <Flex
          direction="row"
          justifyContent="flex-end"
        >
          <IconButton
            icon={<Icon as={Ionicons} name="ios-information-circle-outline" size="3xl" color="white"/>}
            onPress={onPress}
          />
        </Flex>
      )}
      closeComponent={({ onPress }) => (
        <IconButton
          icon={<Icon as={Ionicons} name="close" size="5xl" color="purple.500"/>}
          onPress={onPress}
        />
      )}    
    >
      <Flex flex={1} justifyContent="center" alignItems="center" safeArea>
        <Center>
          <VStack space={4}>
            <ScrollView w="100%" h="100">
              <VStack space={4}>
                <Heading fontSize={28} color="purple.800" paddingTop={4} paddingBottom={4}>
                  Steps
                </Heading>
                <Text fontSize={20} fontWeight="bold" color="purple.700">
                  1. choose and set a task to focus on
                </Text>
                <Text fontSize={20} fontWeight="bold" color="purple.700">
                  2. start the timer (default is 25 mins)
                </Text>
                <Text fontSize={20} fontWeight="bold" color="purple.700">
                  3. work on the task until the timer rings
                </Text>
                <Text fontSize={20} fontWeight="bold" color="purple.700">
                  4. take a short break (~5 mins)
                </Text>
                <Text fontSize={20} fontWeight="bold" color="purple.700">
                  Every 4 Pomodoros take a longer break (~10 - 15 mins).
                </Text>
                <Heading fontSize={28} color="purple.800" paddingTop={4} paddingBottom={4}>
                  Pomodoro Principle
                </Heading>
                <Text fontSize={20} color="purple.700">
                  Invented in the early 1990s by developer, entrepreneur, and author
                  Francesco Cirillo, The Pomodoro Technique was named after the
                  tomato-shaped timer he used to track his work as a university
                  student.
                </Text>
                <Text fontSize={20} color="purple.700">
                  The Pomodoro methodology is simple: When faced with any large task
                  or series of tasks, break the work down into short, timed intervals
                  (called “Pomodoros”) that are spaced out by short breaks. This
                  trains your brain to focus for short periods and helps you
                  stay on top of constantly refilling inboxes and deadlines.
                  Like brain training games that were popular in the early
                  1990s, over time this technique can help to improve
                  attention span and concentration. 
                </Text>
              </VStack>
            </ScrollView>
          </VStack>
        </Center>
      </Flex>
    </Modal>
  );
}
