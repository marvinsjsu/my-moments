
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { IconButton, Icon } from "native-base";

type BackButtonProps = {
  onPress: () => any,
};

export default function BackButton({ onPress }: BackButtonProps) {
  const IconComponent = <Icon as={AntDesign} name="arrowleft" />;
  return (
    <IconButton
      icon={IconComponent}
      borderRadius="full"
      onPress={onPress}
      _icon={{
        color: "white",
        size: "md"
      }}
      _pressed={{
        bg: "purple.600:alpha.20",
      }}
      _ios={{
        _icon: {
          size: "2xl"
        }
      }}
    />
  );
}
