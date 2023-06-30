import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { SansProBoldText } from "../../styled/SansProText";
import PressableText from "../../styled/PressableText";

import { JournalFormData } from "../../../types/data";

type JournalFormProps = {
  onSubmit: (form: JournalFormData) => void,
};

export default function JournalForm({ onSubmit }: JournalFormProps) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <SansProBoldText>
        Journal:
      </SansProBoldText>
      <View style={styles.inputContainer}>
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="journal"
        />
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            console.log({ data });
            onSubmit(data as JournalFormData);
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.5,
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#7d7373",
  }
});
