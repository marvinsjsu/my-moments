import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";

import { COLORS } from "../constants/styles";

export default function useFontColor() {
  const colorScheme = useColorScheme();
  const [ fontColor, setFontColor ] = useState(COLORS.lightThemeFont);

  useEffect(() => {
    colorScheme === "light"
      ? setFontColor(COLORS.lightThemeFont)
      : setFontColor(COLORS.darkThemeFont);
  }, [colorScheme]);

  return fontColor;
}