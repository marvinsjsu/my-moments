import { FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";

import { PressableProps } from "react-native/types";

type IconProps = {
  iconComponent: FunctionComponent,
}

export type PressableIconProps = PressableProps & IconProps;

export default function PressableIcon({ style, onPress, iconComponent: IconComponent }: PressableIconProps) {
  return (
    <Pressable
      style={style}
      onPress={onPress}
    >
      <IconComponent />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 16,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});


