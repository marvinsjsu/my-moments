import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Stack,
  Input,
  Center,
  HStack,
  Heading,
  FormControl,
} from "native-base";

import FocusModal from "../components/modals/FocusModal";
import FocusListModal from "../components/modals/FocusListModal";
import PomodoroModal from "../components/modals/PomodoroModal";

export default function FocusScreen() {
  const [ activity, setActivity ] = useState("");
  const { control, handleSubmit, reset } = useForm();

  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['purple.300', 'violet.800'],
          start: [0, 0],
          end: [1, 1]
        }
      }} 
      flex={1}
      justifyContent="center"
      alignItems="center"
      paddingTop={12}
      safeArea
    >
      <Center height="100%">
        <Box w="100%">
          <FormControl isRequired>
            <Stack space={4} w="100%" maxW="500px" mx="auto">
              {/* <FormControl.Label> */}
              <Heading color="white" size="lg">
                I am focusing on ...
              </Heading>
              {/* </FormControl.Label> */}
              <Controller
                render={({ field: {onChange, value}}) => (
                  <Input
                    fontSize="3xl"
                    color="white"
                    w="70%"
                    type="text"
                    placeholder="coding"
                    size="xxl"
                    value={value}
                    onChangeText={(activity) => {
                      onChange(activity);
                      setActivity(activity);
                    }}
                    variant="underlined"
                    autoCapitalize="none"
                    multiline={true}
                    autoCorrect={false}
                    placeholderTextColor="hsla(360, 100%, 100%, 0.20)"
                    _ios={{ borderBottomColor: "white" }}
                  />
                )}
                control={control}
                rules={{
                  required: true,
                }}
                name="activity"
              />
              <FocusModal
                activity={activity}
                backButtonCallback={reset}
              />
            </Stack>
          </FormControl>
        </Box>
      </Center>
      <HStack width="90%" maxW="500px" justifyContent="space-between">
        <PomodoroModal />
        <FocusListModal />
      </HStack>
    </Box>
  );
}
