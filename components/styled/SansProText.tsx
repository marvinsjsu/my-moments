import { Text } from "react-native";

export function SansProText(props: Text["props"]) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "sanspro" }]}
    >
      {props.children}
    </Text>
  );
}

export function SansProBoldText(props: Text["props"]) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "sanspro-bold" }]}
    >
      {props.children}
    </Text>
  );
}

