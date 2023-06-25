import { View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { SansProBoldText } from "./SansProText";
import PressableText from "./PressableText";

import { WorkoutItemForm } from "../../types/data";

type WorkoutFormProps = {
  onSubmit: (form: WorkoutItemForm) => void,
};

export default function WorkoutForm({ onSubmit }: WorkoutFormProps) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <SansProBoldText>
        Workout Form
      </SansProBoldText>
      <View style={styles.inputContainer}>
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              placeholder="squats"
              value={value}
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="name"
        />
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              placeholder="60"
              value={value}
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="duration"
        />
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            console.log({ data });
            onSubmit(data as WorkoutItemForm);
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
