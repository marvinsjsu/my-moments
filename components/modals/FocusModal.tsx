import React, { useState } from "react";
import { Flex, IconButton, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useKeepAwake } from "expo-keep-awake";

import Modal from "../../components/styled/Modal";
import NextButton from "../buttons/ControlButton";
import SuccessImage from "../styled/SuccessImage";
import FocusCountdown from "../styled/FocusCountdown";

import { clearFocusEntries } from "../../storage/focus";

type PressTextProps = {
  activity: string,
  nextButtonCallback?: () => any,
  backButtonCallback?: () => any,
};

type FocusModalProps =  PressTextProps;

export default function FocusModal({
  activity,
  nextButtonCallback = () => {},
  backButtonCallback = () => {},
}: FocusModalProps) {
  const [ isDone, setIsDone ] = useState(false);
  
  useKeepAwake();

  return (
    <Modal
      openComponent={({ onPress: onModalPress }) => (
        <Flex
          direction="row"
          justifyContent="flex-end"
        >
          <NextButton
            onPress={async () => {
              setIsDone(false);
              onModalPress();
              nextButtonCallback();
              // await clearFocusEntries();
            }}
            disabled={activity === ""}
          />
        </Flex>
      )}
      closeComponent={({ onPress }) => (
        <IconButton
          onPress={() => {
            onPress();
            backButtonCallback();
          }}
          icon={<Icon as={Ionicons} name="close" size="5xl" color="purple.500"/>}
        />
      )}
    >
      <Flex flex={1} width="100%" justifyContent="center" alignItems="center">
        {isDone ? (
          <SuccessImage />
        ) : (
          <FocusCountdown
            activity={activity}
            onDone={() => setIsDone(true)}
          />
        )}
      </Flex>
    </Modal>
  );
}
