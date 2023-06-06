import { Pressable, StyleSheet } from "react-native";

import { SansProText } from "./SansProText";

import { PressableProps } from "react-native/types";

type TextProps = {
  text: string,
  textStyle?: {},
}

export type PressableTextProps = PressableProps & TextProps;

export default function PressableText(props: PressableTextProps) {
  return (
    <Pressable
      style={props.style}
      onPress={props.onPress}
    >
      <SansProText style={[styles.text, props.textStyle]}>
        {props.text}
      </SansProText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});


