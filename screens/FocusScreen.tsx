import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Icon,
  Stack,
  Input,
  Center,
  Heading,
  IconButton,
  FormControl,
} from "native-base";


export default function FocusScreen() {
  const [ activity, setActivity ] = useState("");
  const { control, handleSubmit } = useForm();

  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['purple.300', 'violet.800'],
          start: [0, 0],
          end: [1, 1]
        }
      }} 
      alignItems="center"
      safeArea
    >
      <Center height={"100%"}>
        <Box w="100%">
          <FormControl isRequired>
            <Stack space={4} w="100%" maxW="500px" mx="auto" shadow={"3"}>
              {/* <FormControl.Label> */}
              <Heading color="white" size="lg">I want to focus on ...</Heading>
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
                    onChangeText={onChange}
                    variant="underlined"
                    placeholderTextColor="gray.100"
                    autoCapitalize="none"
                  />
                )}
                control={control}
                rules={{
                  required: true,
                }}
                name="activity"
              />              

              <IconButton icon={<Icon as={AntDesign} name="arrowright" />} borderRadius="full"
                _icon={{
                  color: "white",
                  size: "md"
                }}
                _pressed={{
                  bg: "green.600:alpha.20",
                }}
                _ios={{
                  _icon: {
                    size: "2xl"
                  }
                }}
                onPress={handleSubmit((data) => {
                  console.log({ data });
                })}
              />
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});