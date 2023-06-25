import { Text, View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { SansProBoldText } from "../../styled/SansProText";
import PressableText from "../../styled/PressableText";

import { GratitudeFormData } from "../../../types/data";

type GratitudeFormProps = {
  onSubmit: (form: GratitudeFormData) => void,
};

export default function GratitudeForm({ onSubmit }: GratitudeFormProps) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <SansProBoldText>
        I am grateful for ...
      </SansProBoldText>
      <View style={styles.inputContainer}>
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              keyboardType="default"
              autoCapitalize="none"
              numberOfLines={5}
              inputMode="text"
              placeholder="1."
              value={value}
              multiline
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="gratitude_1"
        />
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              keyboardType="default"
              autoCapitalize="none"
              numberOfLines={5}
              inputMode="text"
              placeholder="2."
              value={value}
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="gratitude_2"
        />
        <Controller
          render={({ field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              keyboardType="default"
              autoCapitalize="none"
              numberOfLines={5}
              inputMode="text"
              placeholder="3."
              value={value}
            />
          )}
          control={control}
          rules={{
            required: true,
          }}
          name="gratitude_3"
        />
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            console.log({ data });
            onSubmit(data as GratitudeFormData);
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
    paddingTop: 20,
    paddingBottom: 20,
  },
  textInput: {
    width: 320,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "#7d7373",
    borderBottomWidth: 2,
    // borderWidth: 2,
    // borderRadius: 5,
    // borderColor: "#7d7373",
  }
});
