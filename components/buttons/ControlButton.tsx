
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { IconButton, Icon } from "native-base";

type NextButtonProps = {
  onPress: () => void,
  disabled?: boolean,
};

export default function NextButton({ onPress, disabled = false }: NextButtonProps) {
  const IconComponent = <Icon as={AntDesign} name="arrowright" />;
  return (
    <IconButton
      icon={IconComponent}
      borderRadius="full"
      disabled={disabled}
      onPress={onPress}
      _disabled={{
        _icon: {
          color: "purple.500",
        }
      }}
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
        },
      }}
    />
  );
}