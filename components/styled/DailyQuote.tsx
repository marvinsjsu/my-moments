import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { SansProBoldText } from "./SansProText";
import { getDailyQuote } from "../../storage/journal";

import { DailyQuoteItem } from "../../types/data";

export default function DailyQuote() {
  const [ quote, setQoute ] = useState<DailyQuoteItem>({
    quoteText: "",
    quoteAuthor: "",
  });

  useEffect(() => {
    const loadDailyQuote = async () => {
      const dailyQuote = await getDailyQuote();
      setQoute(dailyQuote);
    };

    loadDailyQuote();
  }, []);

  return(
    <View style={styles.container}>
      <SansProBoldText style={styles.quote}>
        "{quote.quoteText}"
      </SansProBoldText>
      <SansProBoldText style={styles.author}>
        - {quote.quoteAuthor}
      </SansProBoldText>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  quote: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "sans3-italic",
  },
  author: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
  }
});
