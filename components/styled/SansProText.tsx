import { Text } from "react-native";

import useFontColor from "../../hooks/useFontColor";

export function SansProText(props: Text["props"]) {
  const color = useFontColor();

  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "sanspro", color }]}
    >
      {props.children}
    </Text>
  );
}

export function SansProBoldText(props: Text["props"]) {
  const color = useFontColor();

console.log({ color });

  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "sanspro-bold", color }]}
    >
      {props.children}
    </Text>
  );
}

