import React from "react";
import { Center, Image, Heading } from "native-base";

export default function SuccessImage() {
  return (
    <Center>
      <Image
        // TODO: source needs to be dynamic/random
        fallbackSource={require("../../assets/defaults/success-marshawn-lynch.gif")}
        source={require("../../assets/defaults/success-marshawn-lynch.gif")}
        alt="Celebrate a successful moment of focus!"
        height="80%"
        width={500}
      />
    </Center>
  );
}
