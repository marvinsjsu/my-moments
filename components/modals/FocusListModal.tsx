import React, { useState, useEffect } from "react";
import { Heading, Center, VStack, Text, Flex, IconButton, Icon, FlatList } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import Modal from "../../components/styled/Modal";

import { getFocusEntries } from "../../storage/focus";
import { secondsToMinutes } from "../../utils/time";

import { FocusItem } from "../../types/data";

export default function FocusListModal() {
  const [ focusItems, setFocusItems ] = useState<FocusItem[]>([]);
  const [ currTime, setCurrTime ] = useState<number>(0);

  useEffect(() => {
    const loadFocusItems = async () => {
      const focusEntries = await getFocusEntries();
      if (focusEntries?.length > 0) {
        setFocusItems(focusEntries);
      }
    };
    loadFocusItems();
  }, [currTime]);

  const setCurrentTime = () => {
    const now = Date.now();
    setCurrTime(now);
  };

  return (
    <Modal
      openComponent={({ onPress }) => (
        <Flex
          direction="row"
          justifyContent="flex-end"
        >
          <IconButton
            icon={<Icon as={Ionicons} name="list" size="3xl" color="white" />}
            onPress={() => {
              onPress();
              setCurrentTime();
            }}
          />
        </Flex>
      )}
      closeComponent={({ onPress }) => (
        <IconButton
          onPress={onPress}
          icon={<Icon as={Ionicons} name="close" size="5xl" color="purple.500" />}
        />
      )}  
    >
      <Flex flex={1} justifyContent="center" alignItems="center" safeArea>
        {focusItems.length > 0 ? (
          <VStack flex={1} space={4} justifyContent="flex-end">
            <Heading color="purple.800" fontSize={24} marginBottom={4}>I've focused on ...</Heading>
            <FlatList w="100%" mb="4"
              data={focusItems}
              renderItem={({ item, index }) => (
                <Text
                  key={`${item.activity}${index}`}
                  color="purple.800"
                  textAlign="left"
                  fontSize={30}
                  lineHeight={40}
                  marginBottom={7}
                >
                    {item.activity} for {secondsToMinutes(item.duration)[1]} mins
                </Text>
              )}
            />
          </VStack>
        ) : (
          <Center>
            <Heading fontSize={40} color="purple.800">
              I have not focused on anything with MyMoments yet ...
            </Heading>
          </Center>
        )}
      </Flex>
    </Modal>
  );
}

