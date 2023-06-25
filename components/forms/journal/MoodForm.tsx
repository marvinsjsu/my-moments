import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from "../../../constants/styles";
import { MoodTypes } from "../../../constants";

const initialState = {
  [MoodTypes.Sick]: false,
  [MoodTypes.Angry]: false,
  [MoodTypes.Sad]: false,
  [MoodTypes.Happy]: false,
  [MoodTypes.Excited]: false,
};

type MoodFormProps = {
  onChange: (mood: MoodTypes) => void,
};

export default function MoodForm({ onChange }: MoodFormProps) {
  const [ mood, setMood ] = useState(initialState);

  const handleOnPressMood = (selectedMood: MoodTypes) => {
    const newMood = Object.create(initialState);
    newMood[selectedMood] = true;
    setMood(newMood);
    onChange(selectedMood);
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={mood[MoodTypes.Sick] ? COLORS.moodIconSelected : COLORS.moodIconDefault}
        onPress={() => handleOnPressMood(MoodTypes.Sick)}
        name="emoticon-sick-outline"
        size={52}
      />
      <FontAwesome5
        color={mood[MoodTypes.Angry] ? COLORS.moodIconSelected : COLORS.moodIconDefault}
        onPress={() => handleOnPressMood(MoodTypes.Angry)}
        name="angry"
        size={48}
      />
      <Entypo
        color={mood[MoodTypes.Sad] ? COLORS.moodIconSelected : COLORS.moodIconDefault}
        onPress={() => handleOnPressMood(MoodTypes.Sad)}
        name="emoji-sad"
        size={48}
      />
      {/* <FontAwesome5 name="meh" size={48} color="black" /> */}
      <Entypo
        color={mood[MoodTypes.Happy] ? COLORS.moodIconSelected : COLORS.moodIconDefault}
        onPress={() => handleOnPressMood(MoodTypes.Happy)}
        name="emoji-happy"
        size={48}
      />
      <MaterialCommunityIcons
        color={mood[MoodTypes.Excited] ? COLORS.moodIconSelected : COLORS.moodIconDefault}
        onPress={() => handleOnPressMood(MoodTypes.Excited)}
        name="emoticon-excited-outline"
        size={58}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
